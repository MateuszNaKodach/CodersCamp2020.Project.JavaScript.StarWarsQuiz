import { Player } from '../src/app/Player';
import { ComputerMind, randomAnswerNr } from '../src/app/ComputerMind';

describe('Computer Mind', () => {
  it('When true is true', () => {
    let flag = true;
    expect(flag).toBe(true);
  });

  it('When call setQuestion(), check if question in computer mind is set', () => {
    const question = {
      answers: ['Luke Skywalker', 'R2-D2', 'Chewbacca', 'Boba Fett'],
      image: 'c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzEuanBn',
      rightAnswer: 'Luke Skywalker',
    };
    const computerMind = new ComputerMind();
    computerMind.setQuestion(question);
    expect(computerMind.question).toBe(question);
  });

  it('When randomAnswerNr() working, check if return 0-3', () => {
    const question = {
      answers: ['Luke Skywalker', 'R2-D2', 'Chewbacca', 'Boba Fett'],
      image: 'c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzEuanBn',
      rightAnswer: 'Luke Skywalker',
    };
    const result = randomAnswerNr(question.answers);
    for (let i = 0; i < 100; i++) expect(result < 4).toBe(true);
  });

  it('When computer try To Answer, check if computer mind return String', () => {
    const question = {
      answers: ['Luke Skywalker', 'R2-D2', 'Chewbacca', 'Boba Fett'],
      image: 'c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzEuanBn',
      rightAnswer: 'Luke Skywalker',
    };
    const computerMind = new ComputerMind();
    computerMind.setQuestion(question);
    const response = computerMind.tryToAnswer();
    const responseType = typeof response;
    expect(responseType).toBe('string');
  });
});
