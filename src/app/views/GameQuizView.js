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
    console.log(settings);
    console.log('Jestem z konstruktora GAMEQUIZVIEW');
  }

  startGame() {
    console.log('Funkcja czyszcząca mainContainer');
    this.clearMainContainer();
    // clearMainContainer();
    console.log('Funkcja ustawiająca komponent z pytaniem');
    console.log('Funkcja ustawiająca komponent z odpowiedziami');
  }

  clearMainContainer() {
    console.log('Czyszczę mainContainer');
    console.log('Czyszczę mainContainer');
    this.settings.clearViewCallbackFunction();
  }

  setQuestionComponent() {}

  renderGameViewArray() {}
}

function modifiedGameModeComponent(gameModeName, questionsArray) {
  let question = '';
  const questionContainer = GameMode(question);
  questionContainer.className = 'quizQuestion';

  switch (gameModeName) {
    case 'people':
      question = questionsArray[0];
      questionContainer.textContent = `Question: ${question}`;
      break;
    case 'vehicles':
      question = questionsArray[1];
      questionContainer.textContent = `Question: ${question}`;
      break;
    case 'starships':
      question = questionsArray[2];
      questionContainer.textContent = `Question: ${question}`;
      break;
  }

  return questionContainer;
}

// function cleanViewCallbackFunction() {}
