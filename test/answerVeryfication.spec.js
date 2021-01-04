import { isAnswerCorrect } from '../src/app/AnswerVeryfication';

describe('Check function which verify the player answers', () => {
  const correctAsnwer = 'Yoda';
  const playerCorrectAnswer = 'Yoda';
  const playerWrongAnswer = 'Darth Vader';

  it('Check if answer is correct', () => {
    expect(isAnswerCorrect(correctAsnwer, playerCorrectAnswer)).toBeTruthy();
  });

  it('Check if answer is wrong', () => {
    expect(isAnswerCorrect(correctAsnwer, playerWrongAnswer)).not.toBeTruthy();
  });
});
