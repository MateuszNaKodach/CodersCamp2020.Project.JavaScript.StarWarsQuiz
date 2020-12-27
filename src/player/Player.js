export class Player {
    constructor(name = "Player") {
        this._name = name;
        this.answers = [];
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get playerInfo() {
        return `${this._name} ${this.answers}`;
    }

    addAnswer(questionId, chosedAnswer)  {
        let question = {question: questionId, answer: chosedAnswer};
        this.answers.push(question);
    }

    getAnswers() {
        return this.answers;
    }
};