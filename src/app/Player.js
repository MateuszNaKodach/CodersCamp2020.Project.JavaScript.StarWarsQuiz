export class Player {
  askQuestion(question, onQuestionAsked) {
    if (!onQuestionAsked) return;
    
    onQuestionAsked(question);
  }

  answer(chosenAnswer, onQuestionAnswered) {
    onQuestionAnswered(chosenAnswer);
  }
}
