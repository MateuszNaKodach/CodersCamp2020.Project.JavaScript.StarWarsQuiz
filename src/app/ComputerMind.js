export class ComputerMind {
  constructor(computerPlayer, randomAnswerIdGenerator) {
    this.computerPlayer = computerPlayer;
    this.randomAnswerIdGenerator = randomAnswerIdGenerator ?? randomAnswerNr;
  }

  tryToAnswer(question, onQuestionAnswered) {
    const computerAnswerId = this.randomAnswerIdGenerator(question.answers);
    //TODO: Do zrobienia pozostało jeszcze opóźnienie odpowiedzi komputera o ileś milisekund, ale to można dorobić pózniej
    //W zadaniu z rozgrywką całego quizu będzie wtedy problem
    const computerAnswer = question.answers[computerAnswerId];
    this.computerPlayer.answer(computerAnswer, onQuestionAnswered);
  }
}

export const randomAnswerNr = (questionAnswersTab) => {
  const min = 0;
  const max = questionAnswersTab.length;
  return Math.floor(Math.random() * (max - min)) + min;
};
