import { GameMode } from '../components/GameMode';
import { ModeRules } from '../components/ModeRules';
import { ModeRanking } from '../components/ModeRanking';
import { Ranking } from '../Ranking';
import { Button } from '../components/Button';
import { render } from '../../app/rendering';

export const MainContainer = (gameMode = undefined) => {
  const container = document.createElement('section');
  container.classList.add('mainContainer');
  container.id = 'mainContainer';

  cleanView(container);
  setGameMode(container);

  container.setGameMode = (parent, gameMode) => {
    // console.log('Jestem setGameMode z MainContainer!');
    setGameMode(parent, gameMode);
  };

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
function renderView(parent, gameModeName, viewMode) {
  cleanView(parent);
  //// ****************************************************************
  // * TITLE BOX
  const gameModeTitle = GameMode(getModeText(gameModeName, gameModeTitlesList));
  gameModeTitle.classList.add('mainContainer__titleBox');

  //// ****************************************************************
  // * CENTRAL BOX
  const modeRulesBox = ModeRules(getModeText(gameModeName, gameModeRulesList));
  modeRulesBox.classList.add('mainContainer__centralBox');

  const modeRankingBox = ModeRanking(getScoresTabFromDataBase(gameModeName));
  modeRankingBox.classList.add('mainContainer__centralBox');

  //// ****************************************************************
  // * BTNS BOX
  const buttonBox = document.createElement('div');
  buttonBox.classList.add('mainContainer__buttonBox');

  const hallOfFameButton = Button({
    id: 'hallOfFameButton',
    btnText: 'Hall of fame',
    classList: ['mainContainer__hallOfFameButton'],
    onClickFn: () => {
      renderView(parent, gameModeName, 'rankingView');
    },
    icon: 'Fame',
  });

  const rulesButton = Button({
    id: 'rulesButton',
    btnText: 'Rules',
    classList: ['mainContainer__rulesButton'],
    onClickFn: () => {
      renderView(parent, gameModeName, 'rulesView');
    },
    icon: 'Rules',
  });

  const playTheGameButton = Button({
    id: 'playTheGameButton',
    btnText: 'play the game',
    classList: ['mainContainer__playTheGameButton'],
    onClickFn: () => {
      renderView(parent, gameModeName, 'gameView');
    },
  });
  playTheGameButton.setSpecial();

  //// ****************************************************************
  // * SWITCHER - VIEW MODE
  switch (viewMode) {
    case 'rulesView':
      parent.appendChild(gameModeTitle);
      parent.appendChild(modeRulesBox);
      buttonBox.appendChild(hallOfFameButton);
      buttonBox.appendChild(playTheGameButton);
      break;
    case 'rankingView':
      parent.appendChild(gameModeTitle);
      parent.appendChild(modeRankingBox);
      buttonBox.appendChild(rulesButton);
      buttonBox.appendChild(playTheGameButton);
      break;
    case 'gameView':
      break;
    default:
      parent.appendChild(gameModeTitle);
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

// TODO:
function getScoresTabFromDataBase(gameModeName) {
  console.log(gameModeName);
  const scorseTabFromDataBase = new Ranking(gameModeName);
  return scorseTabFromDataBase.getScores();
}

function getModeText(gameModeName, gameModesList) {
  switch (gameModeName) {
    case 'people':
      return gameModesList.people;
      break;
    case 'vehicles':
      return gameModesList.vehicles;
      break;
    case 'starships':
      return gameModesList.starships;
      break;
    default:
      return gameModesList.people;
      break;
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
