import { GameMode } from '../components/GameMode';

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
    this.tamplateClass;
    console.log('Jestem z konstruktora GAMEQUIZVIEW');
  }

  // ******************************************************
  // ******************************************************
  startGame() {
    console.log('Funkcja czyszcząca mainContainer');
    this._clearMainContainer();

    console.log('Funkcja ustawiająca komponent z tytułem pytania');
    this.settings.renderComponentsFromComponentsArrayCallbackFunction([
      this._getWaitingTitleComponent(),
    ]);

    // ! TUTAJ ODDAJEMY GŁOS Maszynie GameManager !
    this.tamplateClass = new TemplateClass(
      () => this._setQuestionFromGameManager(),
      () => this._setEndOfGame,
    );
  }

  // ******************************************************
  _setEndOfGame() {
    console.log('Gra zakończyła się!');
    console.log('Strona powinna przeładować się automatycznie!');
  }
  // ******************************************************
  _getWaitingTitleComponent() {
    return modifiedGameModeComponent(
      this.settings.gameModeName,
      this.settings.gameModeTitlesList,
      true,
    );
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

  _renderLoadedGameViewArray() {
    this._clearMainContainer();
    // TODO: Zbierz komponenty

    const renderedLoadedGameViewArray = [
      modifiedGameModeComponent(
        this.settings.gameModeName,
        this.settings.gameModeTitlesList,
      ),
    ];

    // TODO: Wstaw komponenty do tablicy
    // TODO: wyrenderuj komponenty
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
    this._renderLoadedGameViewArray(questionObjectFromGameMenager);
    // TODO: TUTAJ wywołuję ustawienie -> OBRAZEK
  }

  // ******************************************************
  _onClickButton() {
    this._clearMainContainer();
    this._getWaitingTitleComponent();
  }
  // ******************************************************
}

function modifiedGameModeComponent(
  gameModeName,
  questionsArray,
  isWaitingForRendering = false,
) {
  let questionTitle = '';
  const questionContainer = GameMode(questionTitle);
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
// ! Przykład Dla programista Ania --->>>
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
    this._tampleMethods_1();
  }

  _tampleMethods_1() {
    console.log('TemplateClass._nextMethods');
    this.templateGeneratorClass = new TemplateGeneratorClass();
    this._setQuestionInUI();
  }

  _setQuestionInUI() {
    console.log('TemplateClass._setQuestionInUI');
    this.templateGeneratorClass.getGenereatedQuestion((returnedObj) => {
      this.callbackFunction_setQuestionFromGameManager(returnedObj);
    });
  }

  setAnswerFromUI() {
    console.log('TemplateClass._setQuestionInUI');
    this._tampleMethods_2();
  }

  _tampleMethods() {
    console.log('TemplateClass._tampleMethods');
    this._setQuestionInUI();
  }

  _templeEndOfGame() {
    console.log('KONIEC GRY!');
    this.callbackFunction_setEndOfGame();
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
