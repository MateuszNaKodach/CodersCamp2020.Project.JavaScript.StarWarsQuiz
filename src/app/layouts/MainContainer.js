import { gameOptionsView } from '../views/GameOptionsView';

export const MainContainer = (gameMode = undefined) => {
  const container = document.createElement('section');
  container.classList.add('mainContainer');
  container.id = 'mainContainer';

  cleanView(container);

  container.setGameModeFromMainContainer = (gameModeName) => {
    renderComponentsFromComponentsArray(
      container,
      gameOptionsView(
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
  expectedViewModeName,
  mainContainer,
  componentsArray,
) {
  if (expectedViewModeName != 'gameView') {
    renderComponentsFromComponentsArray(mainContainer, componentsArray);
  } else {
    console.log('Tu wyświetli się GameQuizView');
  }
}
