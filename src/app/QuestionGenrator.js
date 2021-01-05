export class QuestionGenerator {
  constructor(mode, generateRandomIdArray, fetchData, randomRightAnswer) {
    this.mode = mode;
    this.generateRandomIdArray = generateRandomIdArray;
    this.fetchData = fetchData;
    this.randomRightAnswer =
      randomRightAnswer ?? (answersIdsArray => answersIdsArray[Math.floor(Math.random() * answersIdsArray.length)]);
  }

  async generateQuestion() {
    const questionsIdArray = this.generateRandomIdArray();
    const rightAnswerId = this.randomRightAnswer(questionsIdArray);

    const questions = await Promise.all(questionsIdArray.map(this.getQuestion()));
    const answers = questions.map(question => question.name);
    const rightAnswer = questions.find(question => rightAnswerId === question.id).name;
    const questionImage = btoa(`static/assets/img/modes/${this.mode}/${rightAnswerId}.jpg`);
    return {
      image: questionImage,
      answers,
      rightAnswer,
    };
  }

  getQuestion() {
    return questionId =>
      this.fetchData(this.mode, questionId).then(questionResponse => ({
        id: questionId,
        ...questionResponse,
      }));
  }
}
