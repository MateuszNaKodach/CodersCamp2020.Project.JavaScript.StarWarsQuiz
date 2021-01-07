import { RedButton } from '../../src/app/components/RedButton';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

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

  it('When button is clicked then console.log message should be displayed', () => {
    const testFunction = () => console.log('works');
    console.log = jest.fn();
    const component = RedButton('someText', testFunction);
    userEvent.click(component);
    expect(console.log).toBeCalledWith('works');
  });
});
