export class Player {
  constructor() {}

  askQuestion(question, onQuestionAsked) {
    onQuestionAsked(question);
  }

  answer(chosenAnswer, onQuestionAnswered) {
    onQuestionAnswered(chosenAnswer);
  }
}
