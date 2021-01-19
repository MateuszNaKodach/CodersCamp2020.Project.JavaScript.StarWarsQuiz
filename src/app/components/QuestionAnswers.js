import { Button } from './Button';

export const QuestionAnswers = (answers, rightAnswer, onAnswerChosen) => {
  const questionAnswersObj = document.createElement('div');
  questionAnswersObj.classList.add('questionAnswers');
  questionAnswersObj.id = 'questionAnswers';

  const answerButtons = answers.map((answer, index) => {
    const isAnswerCorrect = answer === rightAnswer;
    const answerButton = Button({
      id: `answer${index + 1}`,
      btnText: answer,
      classList: ['button--answer'],
      onClickFn: () => {
        onAnswerChosen(answer, isAnswerCorrect);
        isAnswerCorrect ? answerButton.setSuccess() : answerButton.setDanger();
      },
    });
    return answerButton;
  });

  answerButtons.forEach((buttonElement) =>
    questionAnswersObj.appendChild(buttonElement),
  );

  return questionAnswersObj;
};
