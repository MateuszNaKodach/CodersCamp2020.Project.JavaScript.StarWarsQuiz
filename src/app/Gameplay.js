import { MainTimer } from './MainTimer';
import { Player } from './Player';
import { fetchData } from '../utils/fetchData';
import { getRandomIdFromArray } from '../utils/getRandomIdFromArray';
import { QuestionGenerator } from './QuestionGenrator';
import { ComputerMind } from './ComputerMind';
import { Ranking } from './Ranking';

export class Gameplay {
  constructor(setQuestion, setEndOfGame, setUpdatedTime, modeObj) {
    this.setQuestion = setQuestion;
    this.setEndOfGame = setEndOfGame;
    this.setUpdatedTime = setUpdatedTime;
    [this.modeName, this.modeIdArray] = Object.values(modeObj);
    this.userAnswers = [];
    this.computerAnswers = [];
    this.questionGenerator = new QuestionGenerator(
      this.modeName,
      () => getRandomIdFromArray(this.modeIdArray),
      fetchData,
    );
    this.questionsToAsk = [];
    this.userPlayer = new Player();
    this.computerPlayer = new Player();
    this.computerMind = new ComputerMind(this.computerPlayer);
  }
  async startGame() {
    await this._generateQuestions();
    this._askQuestionToUser();
    this._askQuestionToComputer();
    this._startTimer();
  }

  async _generateQuestions(questionsNumber = 5) {
    for (let i = 0; i < questionsNumber; i++) {
      const questionGenerated = await this.questionGenerator.generateQuestion();
      this.questionsToAsk.push(questionGenerated);
    }
  }

  async _askQuestionToUser() {
    const answersArray = this.userAnswers;
    const questionIndex = answersArray.length;
    if (this.questionsToAsk.length === 0) {
      await this._generateQuestions();
    } else if (this.questionsToAsk.length - questionIndex < 5) {
      this._generateQuestions();
    }
    console.log('pytania usera: ', this.questionsToAsk.slice(questionIndex));
    this.userPlayer.askQuestion(
      this.questionsToAsk[questionIndex],
      this.setQuestion,
    );
  }

  async _askQuestionToComputer() {
    const answersArray = this.computerAnswers;
    const questionIndex = answersArray.length;
    if (this.questionsToAsk.length === 0) {
      await this._generateQuestions();
    } else if (this.questionsToAsk.length - questionIndex < 5) {
      this._generateQuestions();
    }
    console.log('pytania comp: ', this.questionsToAsk.slice(questionIndex));
    const question = this.questionsToAsk[questionIndex];
    setTimeout(
      () =>
        this.computerPlayer.askQuestion(question, (question) =>
          this._onComputerMindAsked(question),
        ),
      1500,
    );
  }

  _onComputerMindAsked(question) {
    this.computerMind.tryToAnswer(question, (params) =>
      this._onComputerAnswered(params),
    );
  }

  _onComputerAnswered(answer, isAnswerCorrect) {
    this.computerAnswers.push([answer, isAnswerCorrect]);
    this._askQuestionToComputer();
  }

  _startTimer() {
    const timer = new MainTimer(30);
    timer.startCountdown(this.setUpdatedTime, () => this.setEndOfTime());
  }

  setEndOfTime() {
    this.setEndOfGame(this.userAnswers, this.computerAnswers);
  }

  onPlayerAnswered(answer, isAnswerCorrect) {
    this.userAnswers.push([answer, isAnswerCorrect]);
    this._askQuestionToUser();
  }

  setRankingSaving(user, score, maxScore, finishGame) {
    const ranking = new Ranking(this.modeName);
    ranking.saveScore(user, score, maxScore);
    finishGame();
  }
}
