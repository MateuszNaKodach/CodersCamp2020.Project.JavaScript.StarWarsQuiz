export const QuestionImage = (image) => {
  const imageWrapper = document.createElement('div');
  image = atob(image);
  imageWrapper.setAttribute('data-testid', 'imageWrapper');
  imageWrapper.classList.add('questionImage');
  imageWrapper.style.backgroundImage = `url(${image})`;

  return imageWrapper;
};
