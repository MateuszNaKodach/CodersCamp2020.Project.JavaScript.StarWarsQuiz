export const NavMenu = (
  menuItems = [
    { name: 'example', fn: undefined, id: undefined, isActivated: false },
    { name: 'example', fn: undefined, id: undefined, isActivated: false },
    { name: 'example', fn: undefined, id: undefined, isActivated: false },
  ],
) => {
  console.log('Działa Menu!');

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
  });

  // * set first item active
  return navMenuDomObj;
};
