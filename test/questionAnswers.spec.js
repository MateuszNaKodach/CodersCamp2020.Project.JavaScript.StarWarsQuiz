import { QuestionAnswers } from '../src/app/components/QuestionAnswers';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Component should create and display answer buttons', () => {
  it('When answerWrapper is created then proper buttons with answers are displayed', () => {
    const questionAnswers = QuestionAnswers(['A', 'B'], 'B', jest.fn);
    const [incorrect, correct] = questionAnswers.children;

    expect(questionAnswers).toHaveClass('questionAnswers');

    expect(incorrect.id).toBe('answer1');
    expect(incorrect.innerText).toBe('A');
    expect(incorrect).toHaveClass('button--answer');
    expect(incorrect).not.toHaveClass('button--danger');
    expect(incorrect.onClickFn).toBe(undefined);

    expect(correct.id).toBe('answer2');
    expect(correct.innerText).toBe('B');
    expect(correct).toHaveClass('button--answer');
    expect(correct).not.toHaveClass('button--success');
    expect(correct.onClickFn).toBe(undefined);
  });

  it('When correct answer is chosen then callback function should be called with proper parameters', () => {
    const myMock = jest.fn();
    const questionAnswers = QuestionAnswers(['A', 'B'], 'B', myMock);
    const correct = questionAnswers.children[1];

    userEvent.click(correct);
    expect(myMock).toBeCalledWith('B', true);
    expect(correct).toHaveClass('button--success');
  });

  it('When incorrect answer is chosen then callback function should be called with proper parameters', () => {
    const myMock = jest.fn();
    const questionAnswers = QuestionAnswers(['A', 'B'], 'B', myMock);
    const incorrect = questionAnswers.children[0];

    userEvent.click(incorrect);
    expect(myMock).toBeCalledWith('A', false);
    expect(incorrect).toHaveClass('button--danger');
  });
});
