import { Button } from './Button';

export const AnswersWrapper = (answers, rightAnswer, chosenAnswer) => {
  const answersWrapperObj = document.createElement('div');
  answersWrapperObj.classList.add('answersWrapper');
  answersWrapperObj.id = 'answersWrapper';

  answers.forEach((answer, index) => {
    const classList = ['button--answer'];
    const isAnswerCorrect = answer === rightAnswer;
    isAnswerCorrect
      ? classList.push('button--correctAnswer')
      : classList.push('button--incorrectAnswer');
    const answerButton = Button({
      id: `answer${index + 1}`,
      btnText: answer,
      classList,
      onClickFn: chosenAnswer(answer, isAnswerCorrect),
    });

    answersWrapperObj.appendChild(answerButton);
  });

  return answersWrapperObj;
};
