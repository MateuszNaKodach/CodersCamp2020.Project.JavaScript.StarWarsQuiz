export class QuestionGenerator {
  constructor(mode, generateRandomIdArray, fetchData, randomRightAnswer) {
    this.mode = mode;
    this.generateRandomIdArray = generateRandomIdArray;
    this.fetchData = fetchData;
    this.randomRightAnswer = randomRightAnswer ?? (answersIdsArray => answersIdsArray[Math.floor(Math.random() * answersIdsArray.length)])
  }

  generateQuestion() {
    const questionsIdArray = this.generateRandomIdArray();
    const rightAnswerId = this.randomRightAnswer(questionsIdArray);
    let result = {
      image: '',
      answers: [],
      rightAnswer: '',
    };

    questionsIdArray.forEach((id) => {
      this.fetchData(this.mode, id).then((data) => {
        result.answers.push(data.name);
        if (rightAnswerId == id) {
          result.image = btoa(`static/assets/img/modes/${this.mode}/${id}.jpg`);
          result.rightAnswer = data.name;
        }
      });
    });

    return result; //FIXME: Nie wiem co jest nie tak, ale ten obiekt dalej jest pusty
  }
}
