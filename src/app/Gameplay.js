import { MainTimer } from './MainTimer';
import { Player } from './Player';
import { fetchData } from '../utils/fetchData';
import { getRandomIdFromArray } from '../utils/getRandomIdFromArray';
import { Ranking } from './Ranking';

export class Gameplay {
  constructor(setQuestion, setEndOfGame, setUpdatedTime, modeObj) {
    this.setQuestion = setQuestion;
    this.setEndOfGame = setEndOfGame;
    this.setUpdatedTime = setUpdatedTime;
    [this.modeName, this.modeIdArray] = Object.entries(modeObj)[0];
    this.userAnswers = [];
    this.computerAnswers = [];
    this.questionGenerator = new QuestionGenerator(
      this.modeName,
      () => getRandomIdFromArray(this.modeIdArray),
      fetchData,
    );
    this.userPlayer = new Player();
    this.computerPlayer = new Player();
    this.computerMind = new ComputerMind(this.computerPlayer);
  }
  async startGame() {
    this.questionsToAsk = await this._generateQuestions();
    this._askQuestionToUser();
    this._askQuestionToComputer();
    this._startTimer();
  }

  async _generateQuestions(questionsNumber = 60) {
    const questionsToAsk = [];
    for (let i = 0; i < questionsNumber; i++) {
      const questionGenerated = await this.questionGenerator.generateQuestion();
      questionsToAsk.push(questionGenerated);
    }
    return questionsToAsk;
  }

  _askQuestionToUser() {
    const answersArray = this.userAnswers;
    const questionIndex = answersArray.length;
    this._generateMoreQuestions(questionIndex);
    this.userPlayer.askQuestion(
      this.questionsToAsk[questionIndex],
      this.setQuestion,
    );
  }

  async _generateMoreQuestions(questionIndex) {
    if (this.questionsToAsk.length - questionIndex < 10) {
      const moreQuestions = await this._generateQuestions(10);
      this.questionsToAsk.push([...moreQuestions]);
    }
  }

  _askQuestionToComputer() {
    const answersArray = this.computerAnswers;
    const questionIndex = answersArray.length;
    this._generateMoreQuestions(questionIndex);
    const question = this.questionsToAsk[questionIndex];
    setTimeout(
      this.computerPlayer.askQuestion(question, _onComputerMindAsked),
      1500,
    );
  }

  _onComputerMindAsked(question) {
    return computerMind.tryToAnswer(question, onComputerAnswered);
  }

  onComputerAnswered(answer, isAnswerCorrect) {
    computerAnswers.push([answer, isAnswerCorrect]);
    this._askNextQuestion(this.computerPlayer);
  }

  _startTimer() {
    const timer = new MainTimer(30);
    timer.startCountdown(this.setUpdatedTime, this.setEndOfTime);
  }

  setEndOfTime() {
    this.setEndOfGame(this.userAnswers, this.computerAnswers);
  }

  onPlayerAnswered(answer, isAnswerCorrect) {
    userAnswers.push([answer, isAnswerCorrect]);
    this._askNextQuestion(this.userPlayer);
  }

  setRankingSaving(user, score, maxScore, finishGame) {
    const ranking = new Ranking(this.modeName);
    ranking.saveScore(user, score, maxScore);
    finishGame();
  }
}
