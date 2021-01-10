export class ComputerMind {
  constructor() {
    question: undefined;
  }

  setQuestion(question) {
    this.question = question;
  }
  tryToAnswer() {
    const computerAnswer = this.question.answers[
      randomAnswerNr(this.question.answers)
    ];
    return computerAnswer;
  }
}

export const randomAnswerNr = (questionAnswersTab) => {
  const min = 0;
  const max = questionAnswersTab.length;
  return Math.floor(Math.random() * (max - min)) + min;
};
