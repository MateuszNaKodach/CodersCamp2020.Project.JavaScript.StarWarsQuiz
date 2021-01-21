import { Button } from '../src/app/components/Button';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

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

  it('Should create button with class "button--special" when setSpecial()', () => {
    const testButton = Button({
      id: 'testId',
      btnText: 'Test',
      classList: [],
      onClickFn: undefined,
      icon: 'fame',
    });
    testButton.setSpecial();
    expect(testButton.classList.contains('button--special')).toBe(true);
  });

  it('Should create button with class "button--success" when setSuccess()', () => {
    const testButton = Button({
      id: 'testId',
      btnText: 'Test',
      classList: [],
      onClickFn: undefined,
      icon: 'fame',
    });
    testButton.setSuccess();
    expect(testButton.classList.contains('button--success')).toBe(true);
  });

  it('Should create button with class "button--danger" when setDanger()', () => {
    const testButton = Button({
      id: 'testId',
      btnText: 'Test',
      classList: [],
      onClickFn: undefined,
      icon: 'fame',
    });
    testButton.setDanger();
    expect(testButton.classList.contains('button--danger')).toBe(true);
  });

  it('Should create button and delete class "button--success" when setResetAnswer()', () => {
    const testButton = Button({
      id: 'testId',
      btnText: 'Test',
      classList: [],
      onClickFn: undefined,
      icon: 'fame',
    });
    testButton.setSuccess();
    testButton.setResetModifier();
    expect(testButton.classList.contains('button--success')).toBe(false);
  });

  it('Should create button without class "button--incorrectAnswer" when "isIncorrectAnswer" is "true"', () => {
    const testButton = Button({
      id: 'testId',
      btnText: 'Test',
      classList: [],
      onClickFn: undefined,
      icon: 'fame',
      isSpecial: false,
      isCorrectAnswer: false,
      isIncorrectAnswer: true,
    });

    testButton.changeText('test text');
    expect(testButton.innerText).toBe('test text');
  });
});
