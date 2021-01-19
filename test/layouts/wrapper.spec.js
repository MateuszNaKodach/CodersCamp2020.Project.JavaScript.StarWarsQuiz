import { Wrapper } from '../../src/app/layouts/Wrapper';
import '@testing-library/jest-dom';

describe('Main "Wrapper":', () => {
  it('When use "setStartView()" function then check viseable of "logo", "menu", "photo","mainContainer" ', () => {
    const testWrapper = Wrapper();

    const testLogo = testWrapper.querySelector('.logo');
    const testNavMenu = testWrapper.querySelector('.navMenu');
    const testQuestionImage = testWrapper.querySelector('.questionImage');
    const testMainContainer = testWrapper.querySelector('.mainContainer');

    expect(testWrapper).toContainElement(testLogo);
    expect(testLogo).toBeVisible();
    expect(testWrapper).toContainElement(testNavMenu);
    expect(testNavMenu).toBeVisible();
    expect(testWrapper).toContainElement(testQuestionImage);
    expect(testQuestionImage).toBeVisible();
    expect(testWrapper).toContainElement(testMainContainer);
    expect(testMainContainer).toBeVisible();
  });
});
