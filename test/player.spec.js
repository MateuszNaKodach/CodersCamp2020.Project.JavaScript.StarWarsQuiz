import { Player, computerMind } from '../src/app/Player';

describe("Player's logic", () => {
  const player = new Player();
  let question;
  let chosenAnswer;

  it('When player is asked, call onQuestionAsked function with question as parameter', () => {
    const onQuestionAsked = jest.fn();

    player.askQuestion(question, onQuestionAsked);

    expect(onQuestionAsked).toBeCalledWith(question);
  });

  it('When player is asked and onQuesionAsked function is undefined, check if there is no error', () => {
    expect(() => player.askQuestion(question)).not.toThrow();
  });

  it('When player answered, call onQuestionAsnwered function with answer as parameter', () => {
    const onQuestionAnswered = jest.fn();

    player.answer(chosenAnswer, onQuestionAnswered);

    expect(onQuestionAnswered).toBeCalledWith(chosenAnswer);
  });

  it('When player answered and onQuestionAnswered function is undefined, check if there is no error', () => {
    expect(() => player.answer(chosenAnswer)).not.toThrow();
  });

  it('When computer player is asked, check if question in computer mind is question', () => {
    const question = {
      answers: ['Luke Skywalker', 'R2-D2', 'Chewbacca', 'Boba Fett'],
      image: 'c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzEuanBn',
      rightAnswer: 'Luke Skywalker',
    };
    const computerPlayer = new Player();
    computerPlayer.askQuestion(question, computerMind.setQuestion);
    expect(computerMind.question).toBe(question);
  });

  it('When computer player answered, check if computer mind called function', () => {
    const question = {
      answers: ['Luke Skywalker', 'R2-D2', 'Chewbacca', 'Boba Fett'],
      image: 'c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzEuanBn',
      rightAnswer: 'Luke Skywalker',
    };
    const computerPlayer = new Player();
    computerPlayer.askQuestion(question, computerMind.setQuestion);
    let isFunctionCalled = false;
    computerPlayer.answer(
      computerMind.tryToAnswer,
      () => (isFunctionCalled = true),
    );
    expect(isFunctionCalled).toBe(true);
  });
});
