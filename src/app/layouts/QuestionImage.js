export const QuestionImage = () => {
  const imageWrapper = document.createElement('img');
  imageWrapper.setAttribute('data-testid', 'imageWrapper');
  imageWrapper.classList.add('questionImage');
  imageWrapper.src = '../../../static/assets/img/modes/people/4.jpg';

  return imageWrapper;
};
