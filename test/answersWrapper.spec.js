import { AnswersWrapper } from '../src/app/components/AnswersWrapper';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Component should create and display answer buttons', () => {
  it('When answerWrapper is created then proper buttons with answers are displayed', () => {
    const answersWrapper = AnswersWrapper(['A', 'B'], 'B', jest.fn);
    const [incorrect, correct] = answersWrapper.children;

    expect(answersWrapper).toHaveClass('answersWrapper');

    expect(incorrect.id).toBe('answer1');
    expect(incorrect.innerText).toBe('A');
    expect(incorrect).toHaveClass('button--answer');
    expect(incorrect).toHaveClass('button--incorrectAnswer');
    expect(incorrect.onClickFn).toBe(undefined);

    expect(correct.id).toBe('answer2');
    expect(correct.innerText).toBe('B');
    expect(correct).toHaveClass('button--answer');
    expect(correct).toHaveClass('button--correctAnswer');
    expect(correct.onClickFn).toBe(undefined);
  });

  it('When answer is chosen then callback function should be called with proper parameters', () => {
    const myMock = jest.fn();
    const answersWrapper = AnswersWrapper(['A', 'B'], 'B', myMock);
    const [incorrect, correct] = answersWrapper.children;

    userEvent.click(incorrect);
    expect(myMock).toBeCalledWith('A', false);

    userEvent.click(correct);
    expect(myMock).toBeCalledWith('B', true);
  });
});
