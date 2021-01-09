export class Player {
  // przekazujemy pytanie oraz funkcje wywołującą rysowanie pytania
  askQuestion(question, onQuestionAsked) {
    if (!onQuestionAsked) return;
    //
    onQuestionAsked(question);
  }

  answer(chosenAnswer, onQuestionAnswered) {
    if (!onQuestionAnswered) return;

    onQuestionAnswered(chosenAnswer);
    // dupa(aas);
  }
}

export const computerMind = {};

// To ma być dodane gdzieś indziej
// const humanPlayer = new Player();
// const computerPlayer = new Player();

// humanPlayer.askQuestion(question, fn());
// computerPlayer.askQuestion(question, computerMind);
