export class Gameplay {
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
  setRankingSaving(
    playerName,
    playerResult,
    playerAnswersQuantity,
    callbackFunction,
    SuperNameGift,
  ) {
    console.log('Zapisano ranking');
    console.log(SuperNameGift);
    this._saveRanking(callbackFunction);
    console.log('object');
  }
  setPlayerAnswer() {
    this._saveData();
    this._setQuestionInUI();
  }

  _saveData() {}

  _saveRanking(callbackFunction) {
    /// tu sobie zapisujesz a potem
    console.log('object');
    console.log('object');
    console.log('object');
    console.log('object');
    console.log(callbackFunction);
    callbackFunction();
    console.log(callbackFunction);
  }

  _templateEndOfGame() {
    console.log('KONIEC GRY!');
    console.log('KONIEC GRY!');
    console.log('KONIEC GRY!');
    console.log('KONIEC GRY!');
    console.log(this.callbackFunction_setEndOfGame);

    this.callbackFunction_setEndOfGame('.', '');

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
