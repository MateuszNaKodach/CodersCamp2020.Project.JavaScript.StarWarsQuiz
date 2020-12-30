export const Btn = (
  btnObj =    {id: undefined, btnText: undefined, class: [], onClickFn: undefined, icon: false},
) => {

  // * set button
  const btnDomObj = document.createElement('button');
  btnDomObj.id = btnObj.id;
  btnDomObj.innerText = btnObj.btnText;
  btnDomObj.classList.add(...btnObj.class);
  btnDomObj.onclick = btnObj.onClickFn;

  // * set buttons icon
  const spanElem = document.createElement('span');
  if (btnObj.icon === 'fame') {
      spanElem.classList.add('icon');
      spanElem.classList.add('icon--fame');
      btnDomObj.appendChild(spanElem);
  } else if (btnObj.icon === 'rules') {
      spanElem.classList.add('icon');
      spanElem.classList.add('icon--rules');
      btnDomObj.appendChild(spanElem);
  }

  return btnDomObj;
}

