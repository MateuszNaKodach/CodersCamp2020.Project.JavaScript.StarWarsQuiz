// Tu jesteś?
export const QuestionImage = (image) => {
  // ! zakomentowane z tego powodu, że (tak to rozumiem) nie powiennismy w komponencie potomnym przypisyywać rodzica na sztywno. Moglibyśmy spróbować przekazać jako argument rodzica (wtedy bedzie dynamicznie).
  // ! const app = document.getElementById('swquiz-app');
  const imageWrapper = document.createElement('div');
  image = atob(image);
  imageWrapper.setAttribute('data-testid', 'imageWrapper');
  imageWrapper.classList.add('questionImage');
  imageWrapper.style.backgroundImage = `url(${image})`;

  return imageWrapper;
};
