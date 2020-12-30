import { NavMenu } from './layouts/NavMenu';
import { QuestionImage } from './layouts/QuestionImage';
import { Logo } from './layouts/Logo';
import { MainContainer } from './layouts/MainContainer';
import { Wrapper } from './layouts/Wrapper';

export const App = ({ options }) => {
  const app = document.getElementById('swquiz-app');

  console.log('Działa App!');
  // TODO dodaj każdemu z elementów kalsę według schematu z pliku wrapper.scss (dodaj ją w pliku App.js jeśli jest taka możliwość)

  renderWrapper(app);
  const wrapper = document.getElementById('wrapper');

  renderNavMenu(wrapper);
  renderLogo(wrapper);
  renderMainContainer(wrapper);
  renderQuestionImage(wrapper);
};

function addingClassNameFromSass(parentClassName, element) {
  const newClassName = parentClassName + '__' + element.className;
  element.classList.add(newClassName);
  return element;
}

function renderWrapper(parent) {
  parent.appendChild(Wrapper());
}

function renderQuestionImage(parent) {
  parent.appendChild(
    QuestionImage('c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzQuanBn'),
  );
  console.log('Działa QuestionImage!');
}

function renderLogo(parent) {
  console.log(parent.className);
  const elem = addingClassNameFromSass(parent.className, Logo());
  parent.appendChild(elem);
  console.log('Działa Logo!');
}

function renderMainContainer(parent) {
  parent.appendChild(MainContainer());
  console.log('Działa MainContainer!');
}

//*** */
function renderNavMenu(parent, activeItemNr = 0) {
  // * usuwa navMenu jeśli istnieje
  //*** */

  if (document.getElementById('navMenu'))
    parent.removeChild(document.getElementById('navMenu'));
  //*** */

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
