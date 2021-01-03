export const Btn = (
  btnObj = {id: undefined, btnText: '', class: [], onClickFn: undefined, icon: ''},
) => {

  // * set button
  const btnDomObj = document.createElement('button');
  btnDomObj.id = btnObj.id;
  btnDomObj.innerText = btnObj.btnText;
  btnDomObj.classList.add('btn');
  btnDomObj.classList.add(...btnObj.class);
  btnDomObj.onclick = btnObj.onClickFn;

  // * set buttons icon
  const spanElem = document.createElement('span');
  if (btnObj.icon != '' && btnObj.icon != undefined) {
    spanElem.classList.add('icon');
    spanElem.classList.add(`icon--${btnObj.icon}`);
    btnDomObj.appendChild(spanElem);
  }

  return btnDomObj;
}

