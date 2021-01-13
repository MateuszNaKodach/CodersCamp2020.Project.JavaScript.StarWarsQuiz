import { ModeRules } from '../src/app/components/ModeRules';
import '@testing-library/jest-dom';

describe('Component should create and display a box with mode rules described', () => {
  it('Component should be created and displayed with a proper icon and title in a header', () => {
    const component = ModeRules('How to play this game');
    const [headerContainer, rules] = component.children;
    const [icon, title] = headerContainer.children;

    expect(component).not.toBeNull();
    expect(component).toHaveClass('modeRules');
    expect(headerContainer).toHaveClass('modeRules__headerContainer');
    expect(icon).toHaveClass('modeRules__icon');
    expect(title).toHaveClass('modeRules__header');
    expect(title.innerText).toBe('Mode Rules');
    expect(rules).toHaveClass('modeRules__text');
    expect(rules.innerText).toBe('How to play this game');
  });

  it('Component should be created with the proper text', () => {
    const component = ModeRules('Hello World');
    const rules = component.children[1];
    expect(rules.innerText).toBe('Hello World');
  });

  it('Component without any argument should be created with default text', () => {
    const component = ModeRules();
    const rules = component.children[1];
    expect(rules.innerText).toBe('This mode probably has some rules...');
  });
});
