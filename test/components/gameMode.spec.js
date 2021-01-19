import { GameMode } from '../../src/app/components/GameMode';
import '@testing-library/jest-dom';

describe('GameMode', () => {
  it('Component should be created and displayed', () => {
    const component = GameMode('Wanna play?');
    expect(component).not.toBeNull();
    expect(component.textContent).toMatch(/Wanna play?/);
  });

  it('Component should be created with the proper text', () => {
    const component = GameMode('Hello World');
    expect(component).toHaveTextContent('MODE: Hello World');
  });

  it('Component without any arguments should be created with default text', () => {
    const component = GameMode();
    expect(component).toHaveTextContent('MODE: Who is this character?');
  });
});
