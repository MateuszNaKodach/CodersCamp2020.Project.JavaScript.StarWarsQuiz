export class Ranking {
    constructor(mode) {
        const modes = ['people', 'starships', 'vehicles'];
        if (modes.includes(mode)) {
            this.mode = mode;
        } else {
            throw `"${mode}" mode is not valid!`;
        }
    }

    _isLessThanThreeResults() {
        let results = localStorage.getItem(this.mode);
        if (!results) {
            localStorage.setItem(this.mode, JSON.stringify([]));
            results = localStorage.getItem(this.mode);
        };
        const numOfResults = JSON.parse(results).length;
        return numOfResults < 3;
    }

    _isHigherThanCurrentTop(score, maxScore) {
        const topResults = JSON.parse(localStorage.getItem(this.mode));
        const totalScores = topResults.map(result => result['score'] / result['maxScore']);
        return score / maxScore >= Math.min(...totalScores);
    }

    _getTwoHighestResults() {
        const topResults = JSON.parse(localStorage.getItem(this.mode));
        const totalScores = topResults.map(result => result['score'] / result['maxScore']);
        return topResults.filter((result, i) => i !== totalScores.indexOf(Math.min(...totalScores)));
    }

    saveScore(user, score, maxScore) {
        if (this._isLessThanThreeResults()) {
            const topResults = JSON.parse(localStorage.getItem(this.mode));
            topResults.push({
                'user': user,
                'score': score,
                'maxScore': maxScore
            });
            localStorage.setItem(this.mode, JSON.stringify(topResults));
        } else if (this._isHigherThanCurrentTop(score, maxScore)) {
            const topResults = this._getTwoHighestResults();
            topResults.push({
                'user': user,
                'score': score,
                'maxScore': maxScore
            });
            localStorage.setItem(this.mode, JSON.stringify(topResults));
        }
    }

    showRanking() {
        return JSON.parse(localStorage.getItem(this.mode));
    }
}