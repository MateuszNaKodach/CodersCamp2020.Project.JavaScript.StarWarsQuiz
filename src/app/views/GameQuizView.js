import { GameMode as gameModeTitleComponent } from '../components/GameMode';
import { QuestionAnswers as questionAnswersButtonsBoxComponent } from '../components/QuestionAnswers';

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
    this.templateClass;
    console.log('Jestem z konstruktora GAMEQUIZVIEW');
  }

  // ******************************************************
  // ******************************************************
  startGame() {
    console.log('Funkcja czyszcząca mainContainer');
    this._clearMainContainer();

    this._renderWaitingTitleComponent();

    // ! TUTAJ ODDAJEMY GŁOS Maszynie GameManager !
    this.templateClass = new TemplateClass(
      (questionObjectFromGameMenager) =>
        this._setQuestionFromGameManager(questionObjectFromGameMenager),
      () => this._setEndOfGame,
    );
  }

  // ******************************************************
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
    console.log('Czyszczę mainContainer');
    this.settings.clearMainContainerViewCallbackFunction();
  }

  // ******************************************************
  // _setQuestionComponent() {
  //   modifiedGameModeComponent();
  // }

  // console.log('Funkcja ustawiająca komponent z odpowiedziami');

  _renderLoadedGameViewArray(questionObjectFromGameMenager) {
    this._clearMainContainer();
    console.log(questionObjectFromGameMenager);

    const modifiedGameModeComp = modifiedGameModeComponent(
      this.settings.gameModeName,
      this.settings.gameModeTitlesList,
    );
    const questionAnswersButtonsBoxComp = questionAnswersButtonsBoxComponent(
      questionObjectFromGameMenager.answers,
      questionObjectFromGameMenager.rightAnswer,
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
    questionObjectFromGameMenager = {
      answers: ['example_1', 'example_2', 'example_3', 'example_4'],
      image: { mode: 'people', rightAnswer: 1 },
      rightAnswer: 'example_1',
    },
  ) {
    console.log('Funkcja ustawiająca treść nowego pytania! ');
    console.log(questionObjectFromGameMenager);
    this._renderLoadedGameViewArray(questionObjectFromGameMenager);

    this._setNewMainQuestionImage(questionObjectFromGameMenager.image);
    // console.log(mainQuestionImage);
    // mainQuestionImage.
  }

  _setNewMainQuestionImage(imageFromQuestionObjectFromGameMenager) {
    console.log('*********************************************');
    console.log('*********************************************');
    const mainQuestionImage = document.getElementById('mainQuestionImage');
    console.log(mainQuestionImage);
    // const imageWrapper = document.createElement('div');
    // image = atob(image);
    // console.log(image);
    // imageWrapper.setAttribute('data-testid', 'imageWrapper');
    // imageWrapper.classList.add('questionImage');

    // mainQuestionImage.style.backgroundImage = `url(./static/assets/img/modes/${imageFromQuestionObjectFromGameMenager.mode}/${imageFromQuestionObjectFromGameMenager.rightAnswer})`;
    mainQuestionImage.style.backgroundImage = `url(./../../../../static/assets/img/modes/${imageFromQuestionObjectFromGameMenager.mode}/${imageFromQuestionObjectFromGameMenager.rightAnswer}.jpg)`;
    console.log(mainQuestionImage);

    // return imageWrapper;
  }

  // ******************************************************
  _onClickButton(answerAddedByUser, isAnswerddedByUserCorrect) {
    this._clearMainContainer();
    // console.log(object);
    this._renderWaitingTitleComponent();
    // this.setAnswerFromUI(answerAddedByUser, isAnswerddedByUserCorrect);
    this.templateClass.setAnswerFromUI(
      answerAddedByUser,
      isAnswerddedByUserCorrect,
    );
  }
  // ******************************************************
}

function modifiedGameModeComponent(
  gameModeName,
  questionsArray,
  isWaitingForRendering = false,
) {
  let questionTitle = '';
  const questionContainer = gameModeTitleComponent(questionTitle);
  questionContainer.classList.add = 'quizQuestion';

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

/////////////************* */
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
    console.log('TemplateClass._nextMethods');
    this.templateGeneratorClass = new TemplateGeneratorClass();
    this._setQuestionInUI();
  }

  _setQuestionInUI() {
    console.log('TemplateClass._setQuestionInUI');
    this.templateGeneratorClass.getGenereatedQuestion((returnedObj) => {
      console.log(returnedObj);
      console.log(returnedObj);
      console.log(returnedObj);
      console.log(returnedObj);
      if (returnedObj)
        this.callbackFunction_setQuestionFromGameManager(returnedObj);
      else {
        this._templateEndOfGame();
      }
    });
  }

  setAnswerFromUI() {
    console.log('TemplateClass._setQuestionInUI');
    console.log('TemplateClass._setQuestionInUI');
    console.log('TemplateClass._setQuestionInUI');
    console.log('TemplateClass._setQuestionInUI');
    console.log('TemplateClass._setQuestionInUI');
    console.log('TemplateClass._setQuestionInUI');
    this._templateMethods();
  }

  _templateMethods() {
    console.log('TemplateClass._tampleMethods');
    this._setQuestionInUI();
  }

  _templateEndOfGame() {
    console.log('KONIEC GRY!');
    this.callbackFunction_setEndOfGame();
    window.location.reload();
  }
}

class TemplateGeneratorClass {
  constructor() {
    this.itemNumber = 0;
    this.tab;
  }

  tab = [
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

  getGenereatedQuestion(callbackFunctionFromTampleClass) {
    const downloadingTime = 1000;
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
      callbackFunctionFromTampleClass(this.tab[this.itemNumber++]);
    }, downloadingTime);
  }
}
