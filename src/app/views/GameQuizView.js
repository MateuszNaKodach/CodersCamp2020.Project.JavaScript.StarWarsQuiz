import { GameMode as gameModeTitleComponent } from '../components/GameMode';
import { QuestionAnswers } from '../components/QuestionAnswers';
import { arrayIdNames } from '../settings';
import { ModalWindow } from '../layouts/ModalWindow';
import { ModalWindowContent } from '../layouts/ModalWindowContent';
import { Gameplay } from './../Gameplay';
import { Sword } from '../components/Sword';
import { TextTimer } from '../components/TextTimer';

export class GameQuizView {
  constructor(
    settings = {
      gameModeName: undefined,
      gameModeTitlesList: undefined,
      clearMainContainerViewCallbackFunction: undefined,
      renderComponentsFromComponentsArrayCallbackFunction: undefined,
    },
  ) {
    this.settings = settings;
    this.questionIdArray = arrayIdNames[`${this.settings.gameModeName}IdArray`];
    this.textTimer = TextTimer();
    this.swordTimer = Sword(30);
  }

  // ******************************************************
  startGame() {
    this._clearMainContainer();

    this._renderWaitingTitleComponent();

    // ! TUTAJ ODDAJEMY GŁOS Maszynie GameManager !
    this.gameManager = new Gameplay(
      (questionObjectFromGameManager) =>
        this._setQuestionFromGameManager(questionObjectFromGameManager),

      (player1answersArray, player2answersArray) =>
        this._setEndOfGame(player1answersArray, player2answersArray),

      (time) => this._setUpdatedTime(time),

      {
        gameModeName: this.settings.gameModeName,
        questionIdArray: this.questionIdArray,
      },
    );
    this.gameManager.startGame();
  }

  // ******************************************************
  _setEndOfGame(player1answersArray = [], player2answersArray = []) {
    const modalWindow = new ModalWindow(document.getElementById('swquiz-app'));
    modalWindow.show(
      new ModalWindowContent(
        player1answersArray,
        player2answersArray,
        (playerName, playerResult, playerAnswersQuantity) =>
          this._onSubmitCallbackFunction(
            playerName,
            playerResult,
            playerAnswersQuantity,
            modalWindow,
            this.settings.modeName,
          ),
      ),
    );

    // modalWindowContent.close();
  }

  _onSubmitCallbackFunction(
    playerName,
    playerResult,
    playerAnswersQuantity,
    modalWindow,
    modeName,
  ) {
    modalWindow.close();
    this.gameManager.setRankingSaving(
      playerName,
      playerResult,
      playerAnswersQuantity,
      () => window.location.reload(),
      // modalWindow,
      // modeName,
      'super Kot Lord JSON oraz super Kot waszmość Brzuszek',
    );

    console.log('Gra zakończyła się!');
    console.log('Gra zakończyła się!');
    console.log('Strona powinna przeładować się automatycznie!');
    console.log('Strona powinna przeładować się automatycznie!');
  }

  _setNewRecordDatabase() {}

  _setUpdatedTime(time) {
    console.log(`Time: ${time} ms`);
    console.log('DODAJ tu TEXT TIMER');
    this.textTimer.updateTextTime(time);
    this.swordTimer.updateTextTime(time);
    // TODO: TEXT TIMER W TYM MIEJSCU
  }

  // ******************************************************
  _renderWaitingTitleComponent() {
    this.settings.renderComponentsFromComponentsArrayCallbackFunction([
      modifiedGameModeComponent(
        this.settings.gameModeName,
        this.settings.gameModeTitlesList,
        true,
      ),
    ]);
  }

  // ******************************************************
  _clearMainContainer() {
    this.settings.clearMainContainerViewCallbackFunction();
  }

  // ******************************************************
  _renderLoadedGameViewArray(questionObjectFromGameManager) {
    this._clearMainContainer();

    const modifiedGameModeComp = modifiedGameModeComponent(
      this.settings.gameModeName,
      this.settings.gameModeTitlesList,
    );
    const questionAnswersButtonsBoxComp = QuestionAnswers(
      questionObjectFromGameManager.answers,
      questionObjectFromGameManager.rightAnswer,
      (answerAddedByUser, isAnswerddedByUserCorrect) =>
        this._onClickButton(answerAddedByUser, isAnswerddedByUserCorrect),
    );

    const renderedLoadedGameViewArray = [
      modifiedGameModeComp,
      questionAnswersButtonsBoxComp,
      this.swordTimer,
      this.textTimer,
    ];

    this.settings.renderComponentsFromComponentsArrayCallbackFunction(
      renderedLoadedGameViewArray,
    );
  }

  _setQuestionFromGameManager(
    questionObjectFromGameManager = {
      answers: ['example_1', 'example_2', 'example_3', 'example_4'],
      image: { mode: 'people', rightAnswer: 1 },
      rightAnswer: 'example_1',
    },
  ) {
    this._renderLoadedGameViewArray(questionObjectFromGameManager);

    this._setNewMainQuestionImage(questionObjectFromGameManager.image);
  }

  _setNewMainQuestionImage(imageFromQuestionObjectFromGameManager) {
    const mainQuestionImage = document.getElementById('mainQuestionImage');

    mainQuestionImage.src = `static/assets/img/modes/${imageFromQuestionObjectFromGameManager.mode}/${imageFromQuestionObjectFromGameManager.rightAnswer}.jpg`;
  }

  // ******************************************************
  _onClickButton(answerAddedByUser, isAnswerddedByUserCorrect) {
    this._clearMainContainer();
    this._renderWaitingTitleComponent();
    this.gameManager.onPlayerAnswered(
      answerAddedByUser,
      isAnswerddedByUserCorrect,
    );
  }
}

// ******************************************************
function modifiedGameModeComponent(
  gameModeName,
  questionsArray,
  isWaitingForRendering = false,
) {
  let questionTitle = '';
  const questionContainer = gameModeTitleComponent(questionTitle);
  // ? questionContainer.classList.add('quizQuestion');

  if (!isWaitingForRendering) {
    switch (gameModeName) {
      case 'people':
        questionTitle = questionsArray.people;
        questionContainer.textContent = `Question: ${questionTitle}`;
        break;
      case 'vehicles':
        questionTitle = questionsArray.vehicles;
        questionContainer.textContent = `Question: ${questionTitle}`;
        break;
      case 'starships':
        questionTitle = questionsArray.starships;
        questionContainer.textContent = `Question: ${questionTitle}`;
        break;
    }
  } else {
    questionContainer.textContent = `Oczekiwanie na pytanie...`;
  }

  return questionContainer;
}
