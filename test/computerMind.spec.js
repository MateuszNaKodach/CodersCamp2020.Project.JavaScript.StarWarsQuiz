import { Player } from '../src/app/Player';
import { ComputerMind, randomAnswerNr } from '../src/app/ComputerMind';

describe('Computer Mind', () => {
  const computerPlayer = new Player();
  const spyComputerPlayerAnswer = jest.spyOn(computerPlayer, 'answer');
  const onQuestionAnswered = jest.fn();

  it('when computer player is asked, then computer mind should answer the question', () => {
    const question = {
      answers: ['Luke Skywalker', 'R2-D2', 'Chewbacca', 'Boba Fett'],
      image: 'c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzEuanBn',
      rightAnswer: 'Luke Skywalker',
    };
    const randomizedNumberId = 2;
    const answerAtRandomizedNumberId = 'Chewbacca';
    const computerMind = new ComputerMind(
      computerPlayer,
      () => randomizedNumberId,
    );

    computerPlayer.askQuestion(question, (question) =>
      computerMind.tryToAnswer(question, onQuestionAnswered),
    );

    expect(spyComputerPlayerAnswer).toBeCalledWith(
      answerAtRandomizedNumberId,
      onQuestionAnswered,
    );
    expect(onQuestionAnswered).toBeCalledWith(answerAtRandomizedNumberId);
  });
});
