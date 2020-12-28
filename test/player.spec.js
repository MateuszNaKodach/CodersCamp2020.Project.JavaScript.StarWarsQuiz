import { Player } from '../src/app/Player';

describe("Player's logic", () => {
  let player = new Player();

  it('Ask player a question, by calling onQuestionAsked function', () => {
    let question;
    let onQuestionAsked = jest.fn();

    player.askQuestion(question, onQuestionAsked);
    
    expect(onQuestionAsked).toBeCalledWith(question);
  });

  it('When player answered, call onQuestionAsnwered function with answer as parameter', () => {
    let chosenAnswer;
    let onQuestionAnswered = jest.fn();

    player.answer(chosenAnswer, onQuestionAnswered)

    expect(onQuestionAnswered).toBeCalledWith(chosenAnswer);
  });
});
