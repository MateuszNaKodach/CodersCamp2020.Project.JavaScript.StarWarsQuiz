import { ModalWindowContent } from '../../src/app/layouts/ModalWindowContent';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { renderComponent } from '../renderComponent';
import { screen } from '@testing-library/dom';

describe('Modal window content', () => {
  it('when button is clicked and username not filled then onSubmitFunction is not called', () => {
    //Given
    const onSubmitFunction = jest.fn();
    renderComponent(
      ModalWindowContent(
        [
          { answer: 'test', isCorrect: true },
          { answer: 'test', isCorrect: true },
        ],
        [
          { answer: 'test', isCorrect: false },
          { answer: 'test', isCorrect: true },
        ],
        onSubmitFunction,
      ),
    );

    //When
    const closeModalWindowButton = screen.queryByTestId('close-window-button');
    userEvent.click(closeModalWindowButton);

    //Then
    expect(onSubmitFunction).not.toHaveBeenCalled();
  });

  it('when button is clicked and username is filled then onSubmitFunction is not called', () => {
    //Given
    const onSubmitFunction = jest.fn();
    renderComponent(
      ModalWindowContent(
        [
          { answer: 'test', isCorrect: true },
          { answer: 'test', isCorrect: true },
        ],
        [
          { answer: 'test', isCorrect: false },
          { answer: 'test', isCorrect: true },
        ],
        onSubmitFunction,
      ),
    );

    //When
    const usernameInput = screen.getByTestId('username-input');
    userEvent.type(usernameInput, 'John');
    const closeModalWindowButton = screen.queryByTestId('close-window-button');
    userEvent.click(closeModalWindowButton);

    //Then
    expect(onSubmitFunction).toHaveBeenCalledWith('John', 2, 2);
  });

  it('displaying correctly summary of players and computers answers', () => {
    //Given
    const playerAnswers = [
      { answer: 'test', isCorrect: true },
      { answer: 'test', isCorrect: true },
    ];
    const computerAnswers = [
      { answer: 'test', isCorrect: false },
      { answer: 'test', isCorrect: true },
    ];
    renderComponent(
      ModalWindowContent(playerAnswers, computerAnswers, jest.fn()),
    );

    //When
    const finalResult = screen.queryByTestId('final-result-text');

    //Then
    expect(finalResult).toHaveTextContent(
      `The force is strong in you young Padawan! During 2 minutes you have answered 2 / 2 questions and Computer quessed 1 / 2.`,
    );
  });
});
