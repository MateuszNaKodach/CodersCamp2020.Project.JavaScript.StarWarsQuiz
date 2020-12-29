import { NavMenu } from './layouts/NavMenu';

export const App = ({ options }) => {
  const app = document.getElementById('swquiz-app');
  console.log('Działa App!');

  addNavMenu(app);
};

function addNavMenu(app) {
  app.appendChild(
    NavMenu([
      {
        name: 'people',
        id: 'navMenu__people',
        fn() {
          console.log('navMenu__people');
        },
      },
      {
        name: 'vehicles',
        id: 'navMenu__starships',
        fn() {
          console.log('navMenu__starships');
        },
      },
      {
        name: 'starships',
        id: 'navMenu__starships',
        fn() {
          console.log('navMenu__starships');
        },
      },
    ]),
  );
}
