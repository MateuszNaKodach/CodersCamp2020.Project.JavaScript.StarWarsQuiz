import { GameOptionsView } from '../views/GameOptionsView';

export const MainContainer = (gameMode = undefined) => {
  const container = document.createElement('section');
  container.classList.add('mainContainer');
  container.id = 'mainContainer';

  cleanView(container);

  // ! TO NIŻEJ TO FUNKCJA
  const gameOptionsView = GameOptionsView(container, cleanView);
  console.log('Tu jestem: container.setGameMode');
  gameOptionsView(container, cleanView);

  container.setGameMode = (parent, gameModeName) => {
    console.log('Tu jestem: container.setGameMode');
    gameOptionsView(container, cleanView, gameModeName);
  };

  return container;
};

//// ****************************************************************
//// ****************************************************************
//// ****************************************************************

function cleanView(parent) {
  parent.innerHTML = '';
}
