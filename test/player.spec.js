import { Player } from '../src/app/Player';

describe("Player's logic", () => {
  const player = new Player();

  it('When player asked, call onQuestionAsked function with question as parameter', () => {
    let question;
    const onQuestionAsked = jest.fn();

    player.askQuestion(question, onQuestionAsked);
    
    expect(onQuestionAsked).toBeCalledWith(question);
  });

  it('When player answered, call onQuestionAsnwered function with answer as parameter', () => {
    let chosenAnswer;
    const onQuestionAnswered = jest.fn();

    player.answer(chosenAnswer, onQuestionAnswered)

    expect(onQuestionAnswered).toBeCalledWith(chosenAnswer);
  });
});
