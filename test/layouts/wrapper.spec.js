import { Wrapper } from '../../src/app/layouts/Wrapper';
import '@testing-library/jest-dom';

describe('Main "Wrapper":', () => {
  it('When use "setStartView()" function then check viseable of "logo", "menu", "photo","mainContainer" ', () => {
    const testWrapper = Wrapper();

    const testLogo = testWrapper.querySelector('.logo');
    const testNavMenu = testWrapper.querySelector('.navMenu');
    const testQuestionImage = testWrapper.querySelector('.questionImage');
    const mainContainer = testWrapper.querySelector('.mainContainer');

    expect(testWrapper).toContainElement(testLogo);
    expect(testLogo).toBeVisible();
    expect(testNavMenu).toBeVisible();
    expect(testQuestionImage).toBeVisible();
    expect((mainContainer = testWrapper.querySelector)).toBeVisible();
  });
});
