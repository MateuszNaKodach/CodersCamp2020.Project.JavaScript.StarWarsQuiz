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
        renderComponentsFromComponentsArray,
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
