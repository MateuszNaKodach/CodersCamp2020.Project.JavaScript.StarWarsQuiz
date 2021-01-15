import { MainContainer } from '../../src/app/layouts/MainContainer';
import '@testing-library/jest-dom';
// import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';
import { renderedComponent } from '../../src/app/rendering';

describe('Main "Wrapper":', () => {
  it('When use "setStartView()" function then check viseable of "logo", "menu", "photo","mainContainer" ', () => {
    // expect().toHaveBeenCalled();
  });
});

// TODO: Kliknięcie w nav menu wywołuje funkcję (cleanAndFill() lub cleanAndFillMainContainer() - nazwa do wyboru):
// TODO: -- niszczy dzieci mainContainer
// TODO: -- niszczy wywpłuje wypelnienie mainContainer
// TODO: -- oparty na "switch"?

// TODO: Wypełnij main mainContainer:

// TODO:  funkcja wywołująca ustawine początkowe
// TODO:  -- Mode Title
// TODO:  -- Container (Rules lub ranking)
// TODO:  -- Dwa przyciski
// TODO:  funkcja podmieniająca  btn na ranking
// TODO:  -- small container
// TODO:  -- btns

// TODO: Kliknięcie przycisku PLAY wywoła metodę cleanAndFill();
