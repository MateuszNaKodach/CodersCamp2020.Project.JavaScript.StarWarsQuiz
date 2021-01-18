export class ComputerMind {
  constructor(computerPlayer, randomAnswerIdGenerator) {
    this.computerPlayer = computerPlayer;
    this.randomAnswerIdGenerator =
      randomAnswerIdGenerator ?? this._randomAnswerNr;
  }

  tryToAnswer(question, onQuestionAnswered) {
    const computerAnswerId = this.randomAnswerIdGenerator(question.answers);
    const computerAnswer = question.answers[computerAnswerId];
    const isAnswerCorrect = computerAnswer === question.rightAnswer;
    this.computerPlayer.answer(
      [computerAnswer, isAnswerCorrect],
      onQuestionAnswered,
    );
  }

  _randomAnswerNr = (questionAnswersTab) => {
    const min = 0;
    const max = questionAnswersTab.length;
    return Math.floor(Math.random() * (max - min)) + min;
  };
}
