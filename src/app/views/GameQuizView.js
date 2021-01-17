import { GameMode as gameModeTitleComponent } from '../components/GameMode';
import { QuestionAnswers as questionAnswersButtonsBoxComponent } from '../components/QuestionAnswers';
import { arrayIdNames } from '../settings';
import { ModalWindow } from '../layouts/ModalWindow';
import { ModalWindowContent } from '../layouts/ModalWindowContent';

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
    this.gameManager;
    this.questionIdArray = arrayIdNames[`${this.settings.gameModeName}IdArray`];
  }

  // ******************************************************
  startGame() {
    this._clearMainContainer();

    this._renderWaitingTitleComponent();

    // ! TUTAJ ODDAJEMY GŁOS Maszynie GameManager !
    this.gameManager = new TemplateClass(
      (questionObjectFromGameManager) =>
        this._setQuestionFromGameManager(questionObjectFromGameManager),

      (player1answersArray, player2answersArray) =>
        this._setEndOfGame(player1answersArray, player2answersArray),

      (time) => this._setUpdatedTime(time),

      {
        gamModeName: this.settings.gameModeName,
        questionIdArray: this.questionIdArray,
      },
    );
  }

  // ******************************************************

  _setEndOfGame(
    player1answersArray = [
      { id: 1, isCorrect: true },
      { id: 2, isCorrect: true },
    ],
    player2answersArray = [
      { id: 1, isCorrect: false },
      { id: 2, isCorrect: true },
    ],
  ) {
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

  _setUpdatedTime(time) {
    console.log(`Time: ${time} ms`);
    console.log('DODAJ tu TEXT TIMER');
    // TODO: TEXT TIMER W TYM MIEJSCU
  }

  _setEndOfGame() {
    console.log('Gra zakończyła się!');
    console.log('Strona powinna przeładować się automatycznie!');
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
    const questionAnswersButtonsBoxComp = questionAnswersButtonsBoxComponent(
      questionObjectFromGameManager.answers,
      questionObjectFromGameManager.rightAnswer,
      (answerAddedByUser, isAnswerddedByUserCorrect) =>
        this._onClickButton(answerAddedByUser, isAnswerddedByUserCorrect),
    );

    const renderedLoadedGameViewArray = [
      modifiedGameModeComp,
      questionAnswersButtonsBoxComp,
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
    // this.gameManager.savePlayerAnswer(
    this.gameManager.setPlayerAnswer(
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

// ******************************************************
// ******************************************************
// ******************************************************
// ! Przykład dla programistów --->>>
// ! WIRTUALNA Game MASZYNA!
// ! WIRTUALNY TEST!

class TemplateClass {
  constructor(
    setQuestionFromGameManagerCallBackFunction,
    setEndOfGameCallbackFunction,
  ) {
    this.callbackFunction_setQuestionFromGameManager = setQuestionFromGameManagerCallBackFunction;
    this.callbackFunction_setEndOfGame = setEndOfGameCallbackFunction;
    this.templateGeneratorClass;
    this._templateMethods_1();
  }

  _templateMethods_1() {
    this.templateGeneratorClass = new TemplateGeneratorClass();
    this._setQuestionInUI();
  }

  _setQuestionInUI() {
    this.templateGeneratorClass.getGenereatedQuestion((returnedObj) => {
      if (returnedObj)
        this.callbackFunction_setQuestionFromGameManager(returnedObj);
      else {
        this._templateEndOfGame();
      }
    });
  }
  setRankingSaving() {
    console.log('Zapisano ranking');
  }
  setPlayerAnswer() {
    this._saveData();
    this._setQuestionInUI();
  }

  _saveData() {}

  _templateEndOfGame() {
    console.log('KONIEC GRY!');
    this.callbackFunction_setEndOfGame();
    let timeToWindowReload = 5000;
    setInterval(() => {
      console.log(
        `Strona zostanie przeładowana za: ${timeToWindowReload / 1000}`,
      );
      timeToWindowReload -= 1000;
    }, 1000);
    // setTimeout(() => window.location.reload(), timeToWindowReload + 1000);
  }
}

// ******************************************************

class TemplateGeneratorClass {
  constructor() {
    this.itemNumber = 0;
    this.internetServer = [
      {
        answers: ['Luke Skywalker', 'R2-D2', 'Chewbacca', 'Boba Fett'],
        image: { mode: 'people', rightAnswer: 1 },
        rightAnswer: 'Luke Skywalker',
      },
      {
        answers: ['Brzuszek', 'R2-D2', 'Kot filemon', 'JSON'],
        image: { mode: 'people', rightAnswer: 2 },
        rightAnswer: 'R2-D2',
      },
      {
        answers: ['Brzuszek', 'Kot filemon', 'JSON', 'C-3PO'],
        image: { mode: 'people', rightAnswer: 3 },
        rightAnswer: 'C-3PO',
      },
    ];
  }

  getGenereatedQuestion(callbackFunctionFromTampleClass) {
    const downloadingTime = 500;
    console.log(`----------------------------------------`);
    console.log(`UWAGA!`);
    console.log(`Trwa pobieranie pytania...`);
    console.log(
      `Przybliżony czas oczekiwania na pytanie to ${downloadingTime} sec`,
    );
    console.log(`(Może zostać naliczona opłata za transmisje danych )`);
    console.log(`----------------------------------------`);
    setTimeout(() => {
      console.log(`----------------------------------------`);
      console.log(`UWAGA! Pobrano pytanie z internetu! `);
      console.log(`Czas pobierania wynosi ${downloadingTime} sec`);
      console.log(
        `-->>>>> UWAGA! Naliczono %c${(Math.random() * 4).toFixed(2)} zł`,
        'background: yellow;  font-weight: bold; ',
        `złotego opłaty za transmisje!`,
      );
      console.log(`----------------------------------------`);
      callbackFunctionFromTampleClass(this.internetServer[this.itemNumber++]);
    }, downloadingTime);
  }
}
