import { Player } from '../src/app/Player';

describe("Player's logic", () => {
  let player = new Player();

  it('Ask player a question', () => {
    let question;
    let onQuestionAsked = jest.fn();

    player.askQuestion(question, onQuestionAsked);
    
    expect(onQuestionAsked).toBeCalledWith(question);
  });

  it('Player answered', () => {
    let chosenAnswer;
    let onQuestionAnswered = jest.fn();

    player.answer(chosenAnswer, onQuestionAnswered)

    expect(onQuestionAnswered).toBeCalledWith(chosenAnswer);
  });
});
