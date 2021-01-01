import { RedButton } from '../../src/app/components/RedButton';

describe('RedButton', () => {
  it('Button should be created without any text', () => {
    const component = RedButton();
    expect(component.textContent).toBe('');
  });

  it('Button should be created with the proper text', () => {
    const text = 'PLAY THE GAME';
    const component = RedButton(text);
    expect(component.textContent).toBe(text);
  });

  it('Created button should have button tag', () => {
    const component = RedButton('HELLO');
    expect(component.tagName).toBe('BUTTON');
  });

  it('Created button should have redButton class', () => {
    const component = RedButton('HELLO');
    expect(component.classList.contains('redButton')).toBe(true);
  });
});
