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
