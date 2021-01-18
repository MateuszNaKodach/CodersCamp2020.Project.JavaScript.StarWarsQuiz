import { Ranking } from '../src/app/Ranking';

describe("Ranking's logic", () => {
  const peopleRanking = new Ranking('people');

  const results = [
    {
      user: 'user1',
      score: 15,
      maxScore: 30, // 50%
    },
    {
      user: 'user2',
      score: 18,
      maxScore: 40, // 45%
    },
    {
      user: 'user3',
      score: 15,
      maxScore: 25, // 60%
    },
  ];

  const expectedResultsWhenOnlyOne = [
    {
      user: 'user',
      score: 0,
      maxScore: 100,
    },
  ];

  const expectedResultsWhenEqual = [
    {
      user: 'user1',
      score: 15,
      maxScore: 30, // 50%
    },
    {
      user: 'user3',
      score: 15,
      maxScore: 25, // 60%
    },
    {
      user: 'newUser',
      score: 9,
      maxScore: 18, // 45%
    },
  ];

  const expectedResultsWhenHigher = [
    {
      user: 'user1',
      score: 15,
      maxScore: 30, // 50%
    },
    {
      user: 'user3',
      score: 15,
      maxScore: 25, // 60%
    },
    {
      user: 'newUser',
      score: 1,
      maxScore: 1, // 100%
    },
  ];

  afterEach(() => {
    localStorage.clear();
  });

  it('When set wrong category name then exception will be thrown', () => {
    expect(() => {
      new Ranking('vehicle');
    }).toThrow('"vehicle" mode is not valid!');
  });

  it('When less than three results then add a new result to the top scores', () => {
    expect(JSON.parse(localStorage.getItem('people'))).toBeNull();
    peopleRanking.saveScore('user', 0, 100);

    expect(JSON.parse(localStorage.getItem('people'))).toEqual(
      expectedResultsWhenOnlyOne,
    );
  });

  it('When there are three scores and a new one is equal to any of them then add the new result to the top scores instead of the lowest one', () => {
    const vehiclesRanking = new Ranking('vehicles');
    localStorage.setItem('vehicles', JSON.stringify(results));

    vehiclesRanking.saveScore('newUser', 9, 18); // 45%

    expect(JSON.parse(localStorage.getItem('vehicles'))).toEqual(
      expectedResultsWhenEqual,
    );
  });

  it('When there are three scores and a new one is higher than any of them then add the new result to the top scores instead of the lowest one', () => {
    const vehiclesRanking = new Ranking('vehicles');
    localStorage.setItem('vehicles', JSON.stringify(results));

    vehiclesRanking.saveScore('newUser', 1, 1); // 100%

    expect(JSON.parse(localStorage.getItem('vehicles'))).toEqual(
      expectedResultsWhenHigher,
    );
  });

  it('When there are three scores and a new one is less than all of them then do not add it to the top scores', () => {
    const starshipsRanking = new Ranking('starships');
    localStorage.setItem('starships', JSON.stringify(results));

    starshipsRanking.saveScore('newUser', 11, 25); // 44%

    expect(JSON.parse(localStorage.getItem('starships'))).toEqual(results);
  });

  it('Ranking saved in local storage should be returned in order', () => {
    const starshipsRanking = new Ranking('starships');
    localStorage.setItem('starships', JSON.stringify(results));

    expect(starshipsRanking.getScores()).toEqual(
      results.sort((a, b) => a.score / a.maxScore - b.score / b.maxScore),
    );
  });

  it('When no score is saved in local storage then return an empty array', () => {
    const starshipsRanking = new Ranking('starships');
    expect(starshipsRanking.getScores()).toEqual([]);
  });
});
