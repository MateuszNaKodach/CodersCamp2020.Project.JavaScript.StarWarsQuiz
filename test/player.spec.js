import { Player } from '../src/app/Player';

describe("Player's logic", () => {
  const player = new Player();
  let question;

  it('When player is asked, call onQuestionAsked function with question as parameter', () => {
    const onQuestionAsked = jest.fn();

    player.askQuestion(question, onQuestionAsked);

    expect(onQuestionAsked).toBeCalledWith(question);
  });

  it('When player is asked and onQuesionAsked function is undefined, check if there is no error', () => {
    // zapytać o drzewo plików po lewej stronie <--------------------
    let onQuesionAsked;

    expect(() => player.askQuestion(question, onQuesionAsked)).not.toThrow();
    // expect(player.askQuestion(question, onQuesionAsked)).not.toThrow();
  });

  it('When player answered, call onQuestionAsnwered function with answer as parameter', () => {
    let chosenAnswer;
    const onQuestionAnswered = jest.fn();

    player.answer(chosenAnswer, onQuestionAnswered);

    expect(onQuestionAnswered).toBeCalledWith(chosenAnswer);
  });
});
