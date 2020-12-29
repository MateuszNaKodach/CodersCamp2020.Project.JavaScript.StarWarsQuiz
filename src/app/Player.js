export class Player {
  askQuestion(question, onQuestionAsked) {
    if (onQuestionAsked) {
      onQuestionAsked(question);
    }
  }

  answer(chosenAnswer, onQuestionAnswered) {
    onQuestionAnswered(chosenAnswer);
  }
}
