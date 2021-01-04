import { GameMode } from '../../src/app/components/GameMode';

describe('GameMode', () => {
  it('Component should be created and displayed', () => {
    const component = GameMode();
    expect(component).not.toBeNull();
    expect(component).toHaveClass('gameMode');
  });

  it('Component should be created with the proper text', () => {
    const component = GameMode('Hello World');
    expect(component.textContent).toBe('MODE: Hello World');
  });

  it('Component without any arguments should be created with default text', () => {
    const component = GameMode();
    expect(component.textContent).toBe('MODE: Who is this character?');
  });
});
