export const NavMenu = (
  menuItems = [
    {
      name: 'example',
      onClickFn: undefined,
      id: undefined,
      isActivated: false,
    },
    {
      name: 'example',
      onClickFn: undefined,
      id: undefined,
      isActivated: false,
    },
    {
      name: 'example',
      onClickFn: undefined,
      id: undefined,
      isActivated: false,
    },
  ],
) => {
  // * set nav
  const navMenuDomObj = document.createElement('nav');
  navMenuDomObj.classList.add('navMenu');
  navMenuDomObj.id = 'navMenu';

  // * set menu list
  const navMenuDomObj__list = document.createElement('ul');
  navMenuDomObj__list.classList.add('navMenu__list');
  navMenuDomObj.appendChild(navMenuDomObj__list);

  // * set list items
  menuItems.map((item, index) => {
    const navMenuDomObj__item = document.createElement('li');
    navMenuDomObj__item.classList.add('navMenu__li');
    navMenuDomObj__item.innerHTML = `
    <button 
      class='navMenu__btn ${item.isActivated ? 'navMenu__btn--active' : ''}'
      id='${item.id}'
    >
      ${item.name}
    </button>
    `;

    navMenuDomObj__list.appendChild(navMenuDomObj__item);

    navMenuDomObj__item.getElementsByClassName('navMenu__btn')[0].addEventListener('click', event => {
      item.onClickFn();
    });
  });

  // * set first item active
  return navMenuDomObj;
};
