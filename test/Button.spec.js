import { Button } from '../src/app/components/Button';
import '@testing-library/jest-dom';
// import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
// import variables from '../sass/_vars.scss';

describe('Function that creates and renders button', () => {
  it('Should create and return button object with passed parameters.', () => {
    const testButton = Button({
      id: 'test-id',
      btnText: 'Test',
      classList: [],
      onClickFn: undefined,
      icon: '',
    });

    expect(testButton).not.toBeNull();
    expect(testButton.id).toBe('test-id');
    expect(testButton.innerText).toBe('Test');
    expect(testButton).toHaveClass('button');
    expect(testButton.onClickFn).toBe(undefined);
    expect(testButton.icon).toBe(undefined);
    expect(testButton.innerHTML).toBeNull;
  });

  it('Should create and return button with span element in it.', () => {
    const testButton = Button({
      id: 'test-id',
      btnText: 'Test',
      classList: [],
      onClickFn: undefined,
      icon: 'Fame',
    });

    const testSpan = document.createElement('span');

    expect(testButton).not.toBeNull();
    expect(testButton.id).toBe('test-id');
    expect(testButton.innerText).toBe('Test');
    expect(testButton).toHaveClass('button');
    expect(testButton.onClickFn).toBe(undefined);

    expect(testButton).toContainHTML(
      '<span class="button__icon" style="background-image: url(../static/assets/ui/IconFame.png);"></span>',
    );
  });

  it('Should test if the button was clicked and onclick function was fired', () => {
    const testButton = Button({
      id: 'test-id',
      btnText: 'Test',
      classList: [],
      onClickFn: myMock,
      icon: 'fame',
    });
    const myMock = jest.fn(
      (testButton.innerText = 'Funkcja onclick zmieniła innerText'),
    );

    userEvent.click(testButton);

    expect(testButton.innerText).toBe('Funkcja onclick zmieniła innerText');
  });

  it('Should create button without id attribute when passed id is empty string', () => {
    const testButton = Button({
      id: '',
      btnText: 'Test',
      classList: [],
      onClickFn: undefined,
      icon: 'fame',
    });

    expect(testButton).not.toHaveAttribute('id');
  });

  it('Should create button without id attribute when passed id is undefined', () => {
    const testButton = Button({
      id: undefined,
      btnText: 'Test',
      classList: [],
      onClickFn: undefined,
      icon: 'fame',
    });

    expect(testButton).not.toHaveAttribute('id');
  });

  it('Should create button with class "button--special" when "isSpecial" is "true"', () => {
    const testButton = Button({
      id: 'testId',
      btnText: 'Test',
      classList: [],
      onClickFn: undefined,
      icon: 'fame',
      isSpecial: true,
    });
    expect(testButton.classList.contains('button--special')).toBe(true);
  });

  it('Should create button without class "button--special" when "isSpecial" is "false"', () => {
    const testButton = Button({
      id: 'testId',
      btnText: 'Test',
      classList: [],
      onClickFn: undefined,
      icon: 'fame',
      isSpecial: false,
    });
    expect(testButton.classList.contains('button--special')).toBe(false);
  });
});
