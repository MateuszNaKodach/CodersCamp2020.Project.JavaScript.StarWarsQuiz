import {
    Ranking
} from '../src/app/Ranking';

describe("Ranking's logic", () => {
    const peopleRanking = new Ranking('people');

    const results = [{
        'user': 'user1',
        'score': 15,
        'maxScore': 30 // 50%
    }, {
        'user': 'user2',
        'score': 18,
        'maxScore': 40 // 45%
    }, {
        'user': 'user3',
        'score': 15,
        'maxScore': 25 // 60%
    }];

    afterEach(() => {
        localStorage.clear();
    });

    it('When set wrong category name, exception will be thrown', () => {
        expect(() => {
            new Ranking('vehicle');
        }).toThrow('"vehicle" mode is not valid!');
    });

    it('When new score is higher than or equal to at least one of top results, return true', () => {
        localStorage.setItem('people', JSON.stringify(results));
        const score = 9;
        const maxScore = 18; // 45%

        expect(peopleRanking._isHigherThanCurrentTop(score, maxScore)).toBeTruthy;
    });

    it('When new score is less than all of top results, return false', () => {
        localStorage.setItem('people', JSON.stringify(results));
        const score = 11;
        const maxScore = 25; // 44%

        expect(peopleRanking._isHigherThanCurrentTop(score, maxScore)).toBeFalsy;
    });

    it('When there are three results, return two best of them.', () => {
        localStorage.setItem('people', JSON.stringify(results));
        const bestResults = [{
            'user': 'user1',
            'score': 15,
            'maxScore': 30 // 50%
        }, {
            'user': 'user3',
            'score': 15,
            'maxScore': 25 // 60%
        }];

        expect(peopleRanking._getTwoHighestResults()).toEqual(bestResults);
    });

    it('When less than three results, add a new result to the top scores', () => {
        const savedResults = [{
            'user': 'user',
            'score': 0,
            'maxScore': 100
        }];
        expect(JSON.parse(localStorage.getItem('people'))).toBeNull;
        peopleRanking.saveScore('user', 0, 100);

        expect(JSON.parse(localStorage.getItem('people'))).toEqual(savedResults);
    });

    it('When there are three scores and a new one is higher than or equal to any of them, add the new result to the top scores instead of the lowest one', () => {
        const savedResults = [{
            'user': 'user1',
            'score': 15,
            'maxScore': 30 // 50%
        }, {
            'user': 'user3',
            'score': 15,
            'maxScore': 25 // 60%
        }, {
            'user': 'newUser',
            'score': 9,
            'maxScore': 18 // 45%
        }];
        const vehiclesRanking = new Ranking('vehicles');
        localStorage.setItem('vehicles', JSON.stringify(results));

        vehiclesRanking.saveScore('newUser', 9, 18); // 45%

        expect(JSON.parse(localStorage.getItem('vehicles'))).toEqual(savedResults);
    });

    it('When there are three scores and a new one is less than all of them, do not add it to the top scores', () => {
        const starshipsRanking = new Ranking('starships');
        localStorage.setItem('starships', JSON.stringify(results));

        starshipsRanking.saveScore('newUser', 11, 25); // 44%

        expect(JSON.parse(localStorage.getItem('starships'))).toEqual(results);
    });

    it('Ranking saved in local storage should be shown', () => {
        const starshipsRanking = new Ranking('starships');
        localStorage.setItem('starships', JSON.stringify(results));

        expect(starshipsRanking.showRanking()).toEqual(results);
    });
});