import { Wrapper } from '../../src/app/layouts/Wrapper';
// import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';
// import { screen } from '@testing-library/dom';

describe('Main "Wrapper":', () => {
  const callBackFunction = jest.fn();
  const testWrapper = Wrapper();

  it('When use "setStartView()" function then check viseable of "logo", "menu", "photo","mainContainer" ', () => {
    expect().toHaveBeenCalled();
  });
});

// TODO: funkcja wypełniająca poczatkowy stan wrappera

// TODO: Ustaw logo
// TODO: Ustaw menu
// TODO: ustaw photo
// TODO: ustaw mainContainer
