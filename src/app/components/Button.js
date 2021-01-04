export const Button = (
  btnObj = {
    id: '',
    btnText: '',
    classList: [],
    onClickFn: undefined,
    icon: '',
  },
) => {
  // * set button
  const btnDomObj = document.createElement('button');
  if (btnObj.id != '' && btnObj.id != undefined) {
    btnDomObj.id = btnObj.id;
  }
  btnDomObj.innerText = btnObj.btnText;
  btnDomObj.classList.add('btn');
  btnDomObj.classList.add(...btnObj.classList);
  btnDomObj.onclick = btnObj.onClickFn;

  // * set buttons icon
  const spanElem = document.createElement('span');
  if (btnObj.icon != '' && btnObj.icon != undefined) {
    spanElem.classList.add('buttonIcon');
    spanElem.style.backgroundImage = `url("../static/assets/ui/Icon${btnObj.icon}.png")`;
    btnDomObj.appendChild(spanElem);
  }

  return btnDomObj;
};
