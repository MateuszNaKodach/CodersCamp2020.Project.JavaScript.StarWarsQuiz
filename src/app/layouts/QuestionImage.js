export const QuestionImage = (image) => {
  //here will come the version from develop
  const imageWrapper = document.createElement('img');
  image = atob(image);
  imageWrapper.setAttribute('data-testid', 'imageWrapper');
  imageWrapper.classList.add('questionImage');
  imageWrapper.src = '../../../static/assets/img/modes/people/4.jpg';

  return imageWrapper;
};
