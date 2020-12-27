import { Player } from '../src/player/Player';

describe("Player's logic", () => {
  let player = new Player();

  it("Create player's object", () => {
    expect(player instanceof Player).toBeTruthy();
  });

  it('Check default name', () => {
    expect(player.name).toBe('Player');
  });

  it('Get player info', () => {
    expect(player.playerInfo).toBe('Player ');
  });

  it('Add question with answer', () => {
    let newPlayer = new Player();
    newPlayer.addAnswer(1, 'Yoda');

    expect(newPlayer.answers[0]).toStrictEqual({ question: 1, answer: 'Yoda' });
  });

  it("Get player's answers", () => {
    let newPlayer = new Player();
    newPlayer.addAnswer(1, 'Yoda');
    newPlayer.addAnswer(2, 'Han Solo');
    newPlayer.addAnswer(3, 'R2-D2');

    expect(newPlayer.getAnswers().length).toBe(3);
  });
});
