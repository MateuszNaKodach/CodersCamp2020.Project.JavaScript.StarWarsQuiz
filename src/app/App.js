import { NavMenu } from './layouts/NavMenu';

export const App = ({ options }) => {
  const app = document.getElementById('swquiz-app');
  console.log('Działa App!');

  updateNavMenu(app);
};

function updateNavMenu(app, activeItemNr = 0) {
  // * usuwa navMenu jeśli istnieje
  if (document.getElementById('navMenu'))
    app.removeChild(document.getElementById('navMenu'));

  // * dodaje navMenu
  app.appendChild(
    NavMenu([
      {
        name: 'people',
        id: 'navMenu__people',
        isActivated: activeItemNr == 0,
        onClickFn() {
          console.log('navMenu__people');
        },
      },
      {
        name: 'vehicles',
        id: 'navMenu__vehicles',
        isActivated: activeItemNr == 1,
        onClickFn() {
          console.log('navMenu__vehicles');
        },
      },
      {
        name: 'starships',
        id: 'navMenu__starships',
        isActivated: activeItemNr == 2,
        onClickFn() {
          console.log('navMenu__starships');
        },
      },
    ]),
  );
}
