import { gameOptionsView } from '../views/GameOptionsView';

export const MainContainer = (gameMode = undefined) => {
  const container = document.createElement('section');
  container.classList.add('mainContainer');
  container.id = 'mainContainer';

  cleanView(container);

  /// !!!!!!!!!!!!

  // // ! TO NIŻEJ TO FUNKCJA
  // console.log(gameOptionsView(container, cleanView));
  gameOptionsView(container, cleanView);
  console.log('Tu jestem: container.setGameMode');

  // console.log(gameOptionsView(container, cleanView));
  // console.log(gameOptionsView());

  // gameOptionsView(container, cleanView);
  container.setGameMode = (parent, gameModeName) => {
    console.log('Tu jestem: container.setGameMode');

    renderComponentsFromComponentsArray(
      container,
      gameOptionsView(container, cleanView, gameModeName),
    );
  };

  container.setGameMode();
  return container;
};

//// ****************************************************************
//// ****************************************************************
//// ****************************************************************

function cleanView(parent) {
  parent.innerHTML = '';
}

function renderComponentsFromComponentsArray(mainContainer, componentsArray) {
  console.log(componentsArray);
  componentsArray.forEach((item) => {
    mainContainer.appendChild(item);
  });
}
