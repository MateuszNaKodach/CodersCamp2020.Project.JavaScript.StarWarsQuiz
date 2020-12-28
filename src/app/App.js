import { Menu } from './layouts/Menu';

export const App = ({ options }) => {
  const app = document.getElementById('swquiz-app');
  console.log('Działa App!');
  app.appendChild(Menu());
};
