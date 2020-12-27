import { Player } from '../src/player/Player';

describe("Player's logic", () => {
  let player = new Player();

  it("Create player's object", () => {
    expect(player instanceof Player).toBeTruthy();
  });

  it('Check default name', () => {
    expect(player.name).toBe('Player');
  });

  it('Name player', () => {
    let newPlayer = new Player('Bob');
    expect(newPlayer.name).toBe('Bob');
  });

  //correct tests below ...
  it('Ask player a question', () => {
    let question = 'Question one...';
    let askQuestion = jest.fn(question);

    expect(player.getQuestion(question, askQuestion)).toEqual(
      askQuestion(question),
    );
  });

  it('Get player answer', () => {
    let chosenAnswer = 'This is the aswer';
    let saveAnswer = jest.fn(chosenAnswer);

    expect(player.answer(chosenAnswer, saveAnswer)).toEqual(
      askQuestion(question),
    );
  });
});
