import { GameMode } from '../components/GameMode';
import { ModeRules } from '../components/ModeRules';
import { ModeRanking } from '../components/ModeRanking';
import { Ranking } from '../Ranking';
import { Button } from '../components/Button';

export const gameOptionsView = (
  container,
  cleanViewCallbackFunction,
  gameModeName = 'people',
) => {
  return setGameModeView(container, cleanViewCallbackFunction, gameModeName);
};

//// ****************************************************************
//// ****************************************************************
function setGameModeView(
  parent,
  cleanViewCallbackFunction,
  gameMode = 'people',
) {
  return renderViewArray(
    parent,
    cleanViewCallbackFunction,
    gameMode,
    'rulesView',
  );
  // renderView(parent, cleanViewCallbackFunction, gameMode, 'rulesView');
  // return [];
}

//// ****************************************************************
function renderViewArray(
  parent,
  cleanViewCallbackFunction,
  gameModeName,
  viewMode,
) {
  cleanViewCallbackFunction(parent);
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
      renderViewArray(
        parent,
        cleanViewCallbackFunction,
        gameModeName,
        'rankingView',
      );
    },
    icon: 'Fame',
  });

  const rulesButton = Button({
    id: 'rulesButton',
    btnText: 'Rules',
    classList: ['mainContainer__rulesButton'],
    onClickFn: () => {
      renderViewArray(
        parent,
        cleanViewCallbackFunction,
        gameModeName,
        'rulesView',
      );
    },
    icon: 'Rules',
  });

  const playTheGameButton = Button({
    id: 'playTheGameButton',
    btnText: 'play the game',
    classList: ['mainContainer__playTheGameButton'],
    onClickFn: () => {
      renderViewArray(
        parent,
        cleanViewCallbackFunction,
        gameModeName,
        'gameView',
      );
    },
  });
  playTheGameButton.setSpecial();

  const elementsArray = [];

  //// ****************************************************************
  // * SWITCHER - VIEW MODE
  switch (viewMode) {
    case 'rulesView':
      elementsArray.push(gameModeTitle);
      elementsArray.push(modeRulesBox);
      // parent.appendChild(gameModeTitle);
      // parent.appendChild(modeRulesBox);
      buttonBox.appendChild(hallOfFameButton);
      buttonBox.appendChild(playTheGameButton);
      elementsArray.push(buttonBox);
      break;
    case 'rankingView':
      elementsArray.push(gameModeTitle);
      elementsArray.push(modeRankingBox);
      // parent.appendChild(gameModeTitle);
      // parent.appendChild(modeRankingBox);
      buttonBox.appendChild(rulesButton);
      buttonBox.appendChild(playTheGameButton);
      elementsArray.push(buttonBox);
      break;
    case 'gameView':
      break;
    default:
      elementsArray.push(gameModeTitle);
      // parent.appendChild(gameModeTitle);
      buttonBox.appendChild(hallOfFameButton);
      buttonBox.appendChild(playTheGameButton);
      elementsArray.push(buttonBox);
      break;
  }

  // parent.appendChild(buttonBox);
  console.log(elementsArray);
  return elementsArray;
}

//// ****************************************************************

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
