export const Button = (
  btnObj = {
    id: '',
    btnText: '',
    classList: [],
    onClickFn: undefined,
    icon: '',
    isSpecial: false,
    isCorrectAnswer: false,
    isIncorrectAnswer: false,
  },
) => {
  // * set button
  const btnDomObj = document.createElement('button');
  if (btnObj.id != '' && btnObj.id != undefined) {
    btnDomObj.id = btnObj.id;
  }
  btnDomObj.innerText = btnObj.btnText;
  btnDomObj.classList.add('button');
  if (btnObj.classList[0]) btnDomObj.classList.add(...btnObj.classList);
  btnDomObj.onclick = btnObj.onClickFn;

  if (btnObj.isSpecial) {
    btnDomObj.classList.add('button--special');
  }

  // * set buttons icon
  const spanElem = document.createElement('span');
  if (btnObj.icon != '' && btnObj.icon != undefined) {
    spanElem.classList.add('button__icon');
    spanElem.style.backgroundImage = `url("../static/assets/ui/Icon${btnObj.icon}.png")`;
    btnDomObj.appendChild(spanElem);
  }

  btnDomObj.setCorrectAnswer = () => {
    btnDomObj.classList.add('button--correctAnswer');
    btnDomObj.classList.remove('button--incorrectAnswer');
  };
  btnDomObj.setIncorrectAnswer = () => {
    btnDomObj.classList.add('button--incorrectAnswer');
    btnDomObj.classList.remove('button--correctAnswer');
  };

  return btnDomObj;
};
