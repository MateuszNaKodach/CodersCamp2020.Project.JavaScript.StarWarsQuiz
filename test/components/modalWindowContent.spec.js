import { ModalWindowContent } from '../../src/app/layouts/ModalWindowContent';
import '@testing-library/jest-dom';

describe('Modal window content', () => {
  it('when button is clicked onSubmitFunction is called', () => {
    //Given
    const modalContent = ModalWindowContent(
      [
        { id: 1, isCorrect: true },
        { id: 2, isCorrect: true },
      ],
      [
        { id: 1, isCorrect: false },
        { id: 2, isCorrect: true },
      ],
      onSubmitFunction,
    );
    const onSubmitFunction = jest.fn();
    const button = modalContent.querySelector('button');
    button.onClickFn = onSubmitFunction;

    //When
    button.onClickFn();

    //Then
    expect(onSubmitFunction).toHaveBeenCalled();
  });

  it('displaying correctly summary of players and computers answers', () => {
    //Given
    const playerAnswers = [
      { id: 1, isCorrect: true },
      { id: 2, isCorrect: true },
    ];
    const computerAnswers = [
      { id: 1, isCorrect: false },
      { id: 2, isCorrect: true },
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
