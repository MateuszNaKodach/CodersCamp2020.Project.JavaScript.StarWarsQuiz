export const RedButton = (text = '') => {
  const redButton = document.createElement('button');
  redButton.classList.add('redButton');
  redButton.textContent = text;

  redButton.addEventListener('click', () => {
    console.log('button works!');
  });

  return redButton;
};
