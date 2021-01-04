export class QuestionGenerator {
  constructor(mode, generateRandomIdArray, fetchData, randomRightAnswer) {
    this.mode = mode;
    this.generateRandomIdArray = generateRandomIdArray;
    this.fetchData = fetchData;
    this.randomRightAnswer =
      randomRightAnswer ??
      ((answersIdsArray) =>
        answersIdsArray[Math.floor(Math.random() * answersIdsArray.length)]);
  }

  async generateQuestion() {
    const questionsIdArray = this.generateRandomIdArray();
    const rightAnswerId = this.randomRightAnswer(questionsIdArray);
    let result = {
      image: '',
      answers: [],
      rightAnswer: '',
    };

    await Promise.all(
      questionsIdArray.map((id) =>
        this.fetchData(this.mode, id).then((data) => {
          result.answers.push(data.name);
          if (rightAnswerId == id) {
            result.image = btoa(
              `static/assets/img/modes/${this.mode}/${id}.jpg`,
            );
            result.rightAnswer = data.name;
          }
        }),
      ),
    );

    return result;
    //FIXME: Ten obiekt nadal jest pusty. Wpadłeś w pułapkę z asynchronicznością.
    //Zwróc uwagę, że fetchData zwrac Promise i Twoja funkcja kończy się - zwraca result zanim jeszcze fetchData się wykona. Trzeba poczekać na rezultat.
  }
}
