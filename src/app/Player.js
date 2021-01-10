export class Player {
  askQuestion(question, onQuestionAsked) {
    if (!onQuestionAsked) return;

    onQuestionAsked(question);
  }

  answer(chosenAnswer, onQuestionAnswered) {
    if (!onQuestionAnswered) return;

    onQuestionAnswered(chosenAnswer);
  }
}

export const computerMind = {
  question: undefined,
  setQuestion(question) {
    computerMind.question = question;
  },
  tryToAnswer() {
    return computerMind.question.answers[randomAnswer(question.answers)];
  },
};

const randomAnswer = (questionAnswers) => {
  const min = 0;
  const max = questionAnswers.lenght;
  setTimeout(Math.floor(Math.random() * (max - min)) + min, 300);
};
