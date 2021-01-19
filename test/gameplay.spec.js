import { Gameplay } from '../src/app/Gameplay';
import { peopleIdArray } from '../src/app/settings';
import { Ranking } from '../src/app/Ranking';

describe('Gameplay test', () => {
  const setQuestion = jest.fn();
  const setEndOfGame = jest.fn();
  const setUpdatedTime = jest.fn();
  const modeObj = {
    gameModeName: 'people',
    questionIdArray: peopleIdArray,
  };
  const gameplay = new Gameplay(
    setQuestion,
    setEndOfGame,
    setUpdatedTime,
    modeObj,
  );
  gameplay.userAnswers = [
    {
      answer: 'A',
      isCorrect: false,
    },
  ];
  gameplay.computerAnswers = [
    {
      answer: 'B',
      isCorrect: false,
    },
    {
      answer: 'C',
      isCorrect: true,
    },
  ];
  const userAnwersAfterQuestion = [
    {
      answer: 'A',
      isCorrect: false,
    },
    {
      answer: 'C',
      isCorrect: true,
    },
  ];

  it('When time is ended then end the game', () => {
    gameplay.setEndOfTime();

    expect(gameplay.setEndOfGame).toBeCalledWith(
      gameplay.userAnswers,
      gameplay.computerAnswers,
    );
  });

  it('When player answered then save the answer and ask next question', () => {
    gameplay.onPlayerAnswered('C', true);

    expect(gameplay.userAnswers).toStrictEqual(userAnwersAfterQuestion);
    expect(gameplay._askQuestionToUser).toBeCalled;
  });

  it('When player answered for at least one question then save the score and finish the game', () => {
    gameplay.ranking.saveScore = jest.fn();
    const finishGame = jest.fn();

    gameplay.setRankingSaving('Luke', 0, 1, finishGame);
    expect(gameplay.ranking.saveScore).toBeCalledWith('Luke', 0, 1);
    expect(finishGame).toBeCalled;
  });

  it('When player did not answered for any question then do not save the score and finish the game', () => {
    gameplay.ranking.saveScore = jest.fn();
    const finishGame = jest.fn();

    gameplay.setRankingSaving('Luke', 0, 0, finishGame);
    expect(gameplay.ranking.saveScore).not.toBeCalled;
    expect(finishGame).toBeCalled;
  });
});
