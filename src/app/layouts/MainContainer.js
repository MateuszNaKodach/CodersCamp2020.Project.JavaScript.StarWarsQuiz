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
    const gameQuizView = new GameQuizView({
      gameModeName: gameModeName,
      gameModeTitlesList: gameModeTitlesList,
      clearMainContainerViewCallbackFunction: () => {
        cleanView(mainContainer);
      },
      renderComponentsFromComponentsArrayCallbackFunction: (
        componentsArray,
      ) => {
        renderComponentsFromComponentsArray(mainContainer, componentsArray);
      },
    });
    gameQuizView.startGame();
  }
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
