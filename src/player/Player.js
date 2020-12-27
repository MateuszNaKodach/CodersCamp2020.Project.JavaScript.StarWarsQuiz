export class Player {
    constructor(name = "Player") {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    getQuestion(question, askQuestion) {
        askQuestion(question);
    }

    asnwer(chosenAnswer, saveAnswer) {
        saveAnswer(chosenAnswer);
    }
};