import { GameMode } from '../components/GameMode';
import { ModeRules } from '../components/ModeRules';
import { Button } from '../components/Button';
import { render } from '../../app/rendering';

export const MainContainer = (gameMode = undefined) => {
  const container = document.createElement('section');
  container.classList.add('mainContainer');
  container.id = 'mainContainer';

  cleanView(container);
  setGameMode(container);

  return container;
};

//// ****************************************************************
//// ****************************************************************
//// ****************************************************************

function cleanView(parent) {
  parent.innerHTML = '';
}

//// ****************************************************************
function setGameMode(parent, gameMode = 'people') {
  renderView(parent, gameMode, 'rulesView');
  renderView(parent, gameMode, 'rulesView');
}

//// ****************************************************************
function renderView(parent, gameMode, viewMode) {
  cleanView(parent);
  //// ****************************************************************
  // * TITLE
  // const gameModeTitle  GameMode(' Who is this character?');

  //// ****************************************************************
  // * CENTRAL
  const modeRulesBox = ModeRules('tutaj trzeba podać zasady gry!');
  modeRulesBox.classList.add('mainContainer__modeBox');

  // TODO: const modeRulesBox = ModeRanking('tutaj trzeba podać zasady gry!');
  // TODO:  modeRulesBox.classList.add('mainContainer__modeBox');

  //// ****************************************************************
  // * BTNS
  const buttonBox = document.createElement('div');
  buttonBox.classList.add('mainContainer__buttonBox');

  const hallOfFameButton = Button({
    id: 'hallOfFameButton',
    btnText: 'Hall of fame',
    classList: ['mainContainer__hallOfFameButton'],
    onClickFn: () => {
      renderView(parent, gameMode, 'rankingView');
    },
    icon: 'Fame',
  });

  const rulesButton = Button({
    id: 'rulesButton',
    btnText: 'Rules',
    classList: ['mainContainer__rulesButton'],
    onClickFn: () => {
      renderView(parent, gameMode, 'rulesView');
    },
    icon: 'Rules',
  });

  const playTheGameButton = Button({
    id: 'playTheGameButton',
    btnText: 'play the game',
    classList: ['mainContainer__playTheGameButton'],
    onClickFn: () => {
      renderView(parent, gameMode, 'gameView');
    },
  });
  playTheGameButton.setSpecial();

  //// ****************************************************************
  // * SWITCHER - VIEW MODE
  switch (viewMode) {
    case 'rulesView':
      parent.appendChild(modeRulesBox);
      buttonBox.appendChild(hallOfFameButton);
      buttonBox.appendChild(playTheGameButton);
      break;
    case 'rankingView':
      // TODO: parent.appendChild(modeRankingBox);
      buttonBox.appendChild(rulesButton);
      buttonBox.appendChild(playTheGameButton);
      break;
    case 'gameView':
      break;
    default:
      buttonBox.appendChild(hallOfFameButton);
      buttonBox.appendChild(playTheGameButton);
      break;
  }

  parent.appendChild(buttonBox);

  // console.log(viewMode);
  // viewMode === 'rulesView'
  //   ? buttonBox.appendChild(hallOfFameButton)
  //   : buttonBox.appendChild(rulesButton);

  // buttonBox.appendChild(playTheGameButton);
  //
}

//// ****************************************************************
// switch (viewMode) {
//   case 'people':
//     // renderView(gameMode, 'RulesView');
//     break;
//   case 'vehicles':
//     // renderView(gameMode, 'RulesView');
//     break
//   case 'starships':
//     // renderView(gameMode, 'RulesView');
//     break;
//   default:
//     // renderView('people', 'RulesView');
// }
