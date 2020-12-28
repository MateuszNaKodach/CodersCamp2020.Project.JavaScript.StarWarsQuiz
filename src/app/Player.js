export class Player {
  askQuestion(question, onQuestionAsked) {
    onQuestionAsked(question);
  }

  answer(chosenAnswer, onQuestionAnswered) {
    onQuestionAnswered(chosenAnswer);
  }
}
