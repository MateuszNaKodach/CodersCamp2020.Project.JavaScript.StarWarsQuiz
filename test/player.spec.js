import { Player } from '../src/app/Player';

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
});
