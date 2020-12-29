import { NavMenu } from './layouts/NavMenu';

export const App = ({ options }) => {
  const app = document.getElementById('swquiz-app');
  console.log('Działa App!');

  updateNavMenu(app, 0);
};

function updateNavMenu(app, activeItemNr) {
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
        fn() {
          console.log('navMenu__people');
        },
      },
      {
        name: 'vehicles',
        id: 'navMenu__starships',
        isActivated: activeItemNr == 1,
        fn() {
          console.log('navMenu__starships');
        },
      },
      {
        name: 'starships',
        id: 'navMenu__starships',
        isActivated: activeItemNr == 2,
        fn() {
          console.log('navMenu__starships');
        },
      },
    ]),
  );
}
