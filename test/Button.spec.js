import { Button } from '../src/app/components/Button';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Function that creates and renders button', () => {
  it('Should create and return button object with passed parameters.', () => {
    const testButton = Button({
      id: 'test-id',
      btnText: 'Test',
      class: [],
      onClickFn: undefined,
      icon: '',
    });

    expect(testButton).not.toBeNull();
    expect(testButton.id).toBe('test-id');
    expect(testButton.innerText).toBe('Test');
    expect(testButton).toHaveClass('btn');
    expect(testButton.onClickFn).toBe(undefined);
    expect(testButton.icon).toBe(undefined);
    expect(testButton.innerHTML).toBeNull;
  });

  it('Should create and return button with span element in it.', () => {
    const testButton = Button({
      id: 'test-id',
      btnText: 'Test',
      class: [],
      onClickFn: undefined,
      icon: 'fame',
    });

    expect(testButton).not.toBeNull();
    expect(testButton.id).toBe('test-id');
    expect(testButton.innerText).toBe('Test');
    expect(testButton).toHaveClass('btn');
    expect(testButton.onClickFn).toBe(undefined);
    expect(testButton).toContainHTML('<span class="icon icon--fame"></span>');
  });

  it('Should test if the button was clicked and onclick function was fired', () => {
    const testButton = Button({
      id: 'test-id',
      btnText: 'Test',
      class: [],
      onClickFn: myMock,
      icon: 'fame',
    });
    const myMock = jest.fn(
      (testButton.innerText = 'Funkcja onclick zmieniła innerText'),
    );

    userEvent.click(testButton);

    expect(testButton.innerText).toBe('Funkcja onclick zmieniła innerText');
  });
});
