export const RedButton = (text = '', actionOnClick) => {
  const redButton = document.createElement('button');
  redButton.classList.add('redButton');
  redButton.textContent = text;

  if (actionOnClick) {
    redButton.addEventListener('click', actionOnClick);
  }

  return redButton;
};
