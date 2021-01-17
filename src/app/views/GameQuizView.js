import { GameMode } from '../components/GameMode';

export class GameQuizView {
  constructor(
    settings = {
      gameModeName: undefined,
      gameModeTitlesList: undefined,
      clearViewCallbackFunction: undefined,
    },
  ) {
    this.settings = settings;
    console.log('Jestem z konstruktora GAMEQUIZVIEW');
  }

  // ******************************************************
  // ******************************************************
  startGame() {
    console.log('Funkcja czyszcząca mainContainer');
    this._clearMainContainer();

    console.log('Funkcja ustawiająca komponent z tytułem pytania');

    // ! TUTAJ ODDAJEMY WODZE GameMaszynie!
    const tamplateClass = new TemplateClass(this.setQuestionFromGameManager);

    const renderedArray = [this._getWaitingTitleComponent()];
    return renderedArray;
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
    this.settings.clearViewCallbackFunction();
  }

  // ******************************************************
  _setQuestionComponent() {
    modifiedGameModeComponent();
  }

  // console.log('Funkcja ustawiająca komponent z odpowiedziami');

  _renderGameViewArray() {}

  setQuestionFromGameManager(
    questionObjectFromGameMenager = {
      image: questionImage,
      answers,
      rightAnswer,
    },
  ) {
    console.log('Funkcja ustawiająca treść nowego pytania! ');
    // TODO: TUTAJ wywołuję ustawienie -> PRZYCISKI
    // TODO: TUTAJ wywołuję ustawienie -> OBRAZEK
  }

  // ******************************************************
}

// TODO: TUTAJ SOBIE USTAWIAM PRZYCISKI
// TODO: TUTAJ SOBIE USTAWIAM OBRAZEK

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
        questionTitle = questionsArray[0];
        questionContainer.textContent = `Question: ${questionTitle}`;
        break;
      case 'vehicles':
        questionTitle = questionsArray[1];
        questionContainer.textContent = `Question: ${questionTitle}`;
        break;
      case 'starships':
        questionTitle = questionsArray[2];
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
  constructor(setQuestionFromGameManager) {
    this.callbackFunction = setQuestionFromGameManager;
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
      this.callbackFunction(returnedObj);
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
      answers: ['Brzuszek', 'Kot filemon', 'JSON', 'R2-D2'],
      image: { mode: 'people', rightAnswer: 2 },
      rightAnswer: 'JSON',
    },
    {
      answers: ['Brzuszek', 'Kot filemon', 'JSON', 'Boba Fett'],
      image: { mode: 'people', rightAnswer: 3 },
      rightAnswer: 'JSON',
    },
  ];

  getGenereatedQuestion(callbackFunctionFromTampleClass) {
    const downloadingTime = 5000;
    console.log(`----------------------------------------`);
    console.log(`UWAGA!`);
    console.log(`Trwa pobieranie pytania...`);
    console.log(
      `Przybliżony czas oczekiwania na pytanie to ${downloadingTime} sec`,
    );
    console.log(`(Może zostać naliczona opłata za transmisje danych )`);
    console.log(`----------------------------------------`);
    setTimeout(() => {
      console.log(
        `UWAGA! Pobrano pytanie z internetu! Czas pobierania wynosi ${downloadingTime} sec`,
      );
      callbackFunctionFromTampleClass(this.tab[this.itemNumber++]);
    }, downloadingTime);
  }
}
