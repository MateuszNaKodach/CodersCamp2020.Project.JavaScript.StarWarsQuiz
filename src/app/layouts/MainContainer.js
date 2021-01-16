import { gameOptionsView } from '../views/GameOptionsView';
import { GameQuizView } from '../views/GameQuizView';

export const MainContainer = (gameMode = undefined) => {
  const container = document.createElement('section');
  container.classList.add('mainContainer');
  container.id = 'mainContainer';

  cleanView(container);

  container.setGameModeFromMainContainer = (gameModeName) => {
    renderComponentsFromComponentsArray(
      container,
      gameOptionsView(
        {
          gameModeTitlesList: gameModeTitlesList,
          gameModeRulesList: gameModeRulesList,
        },
        container,
        cleanView,
        gameModeName,
        onClickFunctionForGameOptionsView,
      ),
    );
  };

  container.setGameModeFromMainContainer();

  return container;
};

function cleanView(parent) {
  parent.innerHTML = '';
}

function renderComponentsFromComponentsArray(mainContainer, componentsArray) {
  console.log(componentsArray);
  componentsArray.forEach((item) => {
    mainContainer.appendChild(item);
  });
}

function onClickFunctionForGameOptionsView(
  gameModeName,
  expectedViewModeName,
  mainContainer,
  componentsArray,
) {
  if (expectedViewModeName != 'gameView') {
    renderComponentsFromComponentsArray(mainContainer, componentsArray);
  } else {
    // ! TU JESTEŚMY >>>>>>>>>>
    // ! TU JESTEŚMY >>>>>>>>>>
    // ! TU JESTEŚMY >>>>>>>>>>

    console.log('Tu wyświetli się GameQuizView');
    const gameQuizView = new GameQuizView({
      gameModeName: gameModeName,
      gameModeTitlesList: gameModeTitlesList,
      clearViewCallbackFunction: () => {
        console.log('CZYSZCZENIE !!!');
        console.log(mainContainer);
        cleanView(mainContainer);
      },
    });
    gameQuizView.startGame();
  }
  // ! <<<<<< TU JESTEŚMY
  // ! <<<<<< TU JESTEŚMY
  // ! <<<<<< TU JESTEŚMY
}

const gameModeTitlesList = {
  people: 'Who is this character?',
  vehicles: 'What is this vehicle?',
  starships: 'What is this starship?',
};

const gameModeRulesList = {
  people:
    'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select who from Star Wars is showed on the left from available options',
  vehicles:
    'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select what vehicle from Star Wars is showed on the left from available options',
  starships:
    'You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select what starship from Star Wars is showed on the left from available options',
};
