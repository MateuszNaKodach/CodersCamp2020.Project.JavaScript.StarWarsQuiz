import { ModalWindowContent } from '../../src/app/layouts/ModalWindowContent';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Modal window content', () => {
  it('when button is clicked onSubmitFunction is called', () => {
    //Given
    const modalContent = ModalWindowContent(
      [
        { answer: 'test', isCorrect: true },
        { answer: 'test', isCorrect: true },
      ],
      [
        { answer: 'test', isCorrect: false },
        { answer: 'test', isCorrect: true },
      ],
      onSubmitFunction,
    );
    const onSubmitFunction = jest.fn();
    const button = modalContent.querySelector('button');
    button.onClickFn = onSubmitFunction;

    //When
    userEvent.click(button);
    // button.onClickFn();

    //Then
    // expect(button).toHaveBeenCalledWith(onSubmitFunction);
    expect(button.onSubmitFunction).toHaveBeenCalled();
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

    //When
    const modalContent = ModalWindowContent(
      playerAnswers,
      computerAnswers,
      onSubmitFunction,
    );

    const onSubmitFunction = jest.fn();
    const finalResult = modalContent.getElementsByClassName(
      'content__finalResults',
    );

    //Then
    expect(finalResult.textContent).toBe(
      `The force is strong in you young Padawan! During 1 minute you have answered 2 / 2 questions and Computer quessed 1 / 2.`,
    );
  });
});
