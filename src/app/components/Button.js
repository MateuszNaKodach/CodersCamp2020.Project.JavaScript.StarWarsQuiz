export const Button = (
  btnObj = {
    id: '',
    btnText: '',
    classList: [],
    onClickFn: undefined,
    icon: '',
  },
) => {
  const btnDomObj = document.createElement('button');
  if (btnObj.id != '' && btnObj.id != undefined) {
    btnDomObj.id = btnObj.id;
  }
  btnDomObj.innerText = btnObj.btnText;
  btnDomObj.classList.add('button');
  if (btnObj.classList[0]) btnDomObj.classList.add(...btnObj.classList);
  btnDomObj.onclick = btnObj.onClickFn;

  const spanElem = document.createElement('span');
  if (btnObj.icon != '' && btnObj.icon != undefined) {
    spanElem.classList.add('button__icon');
    spanElem.style.backgroundImage = `url("../static/assets/ui/Icon${btnObj.icon}.png")`;
    btnDomObj.appendChild(spanElem);
  }

  btnDomObj.changeText = (newText) => {
    btnDomObj.innerText = newText;
  };

  btnDomObj.setSuccess = () => {
    btnDomObj.setResetModifier();
    btnDomObj.classList.add('button--success');
  };
  btnDomObj.setDanger = () => {
    btnDomObj.setResetModifier();
    btnDomObj.classList.add('button--danger');
  };
  btnDomObj.setSpecial = () => {
    btnDomObj.setResetModifier();
    btnDomObj.classList.add('button--special');
  };
  btnDomObj.setResetModifier = () => {
    btnDomObj.classList.remove('button--success');
    btnDomObj.classList.remove('button--danger');
    btnDomObj.classList.remove('button--special');
  };

  return btnDomObj;
};
