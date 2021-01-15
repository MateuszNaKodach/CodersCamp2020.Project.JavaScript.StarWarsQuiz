import { MainContainer } from '../../src/app/layouts/MainContainer';
import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import { renderComponent } from './renderComponent';

describe('Main Container:', () => {
  it('When use "cleanView()" function, then check existing components is deleted ', () => {
    const testMainContainer = MainContainer();
    testChildComponent = document.createElement('div');
    testChildComponent.setAttribute('data-testId', 'testId');
    testMainContainer.appendChild(testChildComponent);
    testMainContainer.cleanView();
    expect(testMainContainer).toBeEmptyDOMElement();
  });

  // ! -------------------
  // ! renderView('people', 'RulesView')
  // ! renderView('people', 'RankingView')
  // ! renderView('people', 'GameView')

  it(`When use "setGameMode()" function with argument ("vehicles"), then create inside "vehicles RulesView"`, () => {
    const testMainContainer = MainContainer('vehicles');
  });
  it(`When use "setGameMode()" function with wrong argument ("testWrongText"), then create inside "people RulesView"`, () => {});
  it(`When use "setGameMode()" function without argument, then create inside "people RulesView"`, () => {});
  it('When use "renderView()" function with correct argument, then change MainContainer ', () => {});
  it('When use "renderView()" function with wrong argument, then not change MainContainer', () => {});
  it('When use "renderView()" function without argument, then not change MainContainer', () => {});
});
