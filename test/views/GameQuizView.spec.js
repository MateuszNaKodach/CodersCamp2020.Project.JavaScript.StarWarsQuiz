import { GameQuizView } from '../../src/app/views/GameQuizView';
import '@testing-library/jest-dom';

describe('Game Quiz View":', () => {
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

  const clearMainContainerViewCallbackFunction = jest.fn();
  const renderComponentsFromComponentsArrayCallbackFunction = jest.fn();

  const gameModeName = 'people';

  const testSettings = {
    gameModeName,
    gameModeTitlesList,
    clearMainContainerViewCallbackFunction,
    renderComponentsFromComponentsArrayCallbackFunction,
  };

  it('When call only constructor then settings will has arguments, gameManager is empty and GameQuizView is emptyt', () => {
    const gameQuizView = new GameQuizView(testSettings);
    expect(gameQuizView.settings).toBe(testSettings);
    expect(gameQuizView.gameManager).toBe(undefined);
    expect(parent.children).toBe(undefined);
  });

  it('When call startGame() then gameManager is empty and GameQuizView is Object', () => {
    const gameQuizView = new GameQuizView(testSettings);
    gameQuizView.startGame();
    expect(typeof gameQuizView.gameManager).toBe('object');
  });

  it('When call _clearMainContainer() then clearMainContainerViewCallbackFunction is called', () => {
    const gameQuizView = new GameQuizView(testSettings);
    gameQuizView.startGame();
    gameQuizView._clearMainContainer();
    expect(clearMainContainerViewCallbackFunction.mock.calls).not.toBe(0);
    expect(clearMainContainerViewCallbackFunction).toBeCalled();
  });
});
