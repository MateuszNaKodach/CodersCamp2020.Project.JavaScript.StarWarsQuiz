export const QuestionImage = (mode, id) => {
  const imageWrapper = document.createElement('img');
  imageWrapper.setAttribute('data-testid', 'imageWrapper');
  imageWrapper.classList.add('questionImage');
  imageWrapper.src = `static/assets/img/modes/${mode}/${id}.jpg`;

  return imageWrapper;
};
