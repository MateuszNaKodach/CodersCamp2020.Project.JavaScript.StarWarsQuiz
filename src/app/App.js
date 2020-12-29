import { NavMenu } from './layouts/NavMenu';

export const App = ({ options }) => {
  const app = document.getElementById('swquiz-app');
  console.log('Działa App!');

  renderNavMenu(app);
};

function renderNavMenu(parent, activeItemNr = 0) {
  // * usuwa navMenu jeśli istnieje
  if (document.getElementById('navMenu'))
    parent.removeChild(document.getElementById('navMenu'));

  // * dodaje navMenu
  parent.appendChild(
    NavMenu([
      {
        name: 'people',
        id: 'navMenu__people',
        isActivated: activeItemNr == 0,
        onClickFn() {
          console.log('navMenu__people');
          renderNavMenu(parent, 0);
        },
      },
      {
        name: 'vehicles',
        id: 'navMenu__vehicles',
        isActivated: activeItemNr == 1,
        onClickFn() {
          console.log('navMenu__vehicles');
          renderNavMenu(parent, 1);
        },
      },
      {
        name: 'starships',
        id: 'navMenu__starships',
        isActivated: activeItemNr == 2,
        onClickFn() {
          console.log('navMenu__starships');
          renderNavMenu(parent, 2);
        },
      },
    ]),
  );
}
