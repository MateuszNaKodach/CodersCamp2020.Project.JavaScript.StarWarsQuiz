import { NavMenu } from './layouts/NavMenu';
import { QuestionImage } from './layouts/QuestionImage';
import { Logo } from './layouts/Logo';
import { MainContainer } from './layouts/MainContainer';
import { Wrapper } from './layouts/Wrapper';

// ***************

export const App = ({ options }) => {
  const app = document.getElementById('swquiz-app');
  console.log('Działa App!');

  renderWrapper(app);
  const wrapper = document.getElementById('wrapper');

  renderNavMenu(wrapper);
  renderLogo(wrapper);
  renderMainContainer(wrapper);
  renderQuestionImage(wrapper);
};

// ***************

function renderWrapper(parent) {
  parent.appendChild(Wrapper());
  console.log('Działa Wrapper!');
}

function renderQuestionImage(parent) {
  const comp = QuestionImage(
    'c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzQuanBn',
  );
  comp.classList.add('wrapper__mainImg');
  parent.appendChild(comp);
  console.log('Działa QuestionImage!');
}

function renderLogo(parent) {
  const comp = Logo();
  comp.classList.add('wrapper__logo');
  parent.appendChild(comp);
  console.log('Działa Logo!');
}

function renderMainContainer(parent) {
  const comp = MainContainer();
  comp.classList.add('wrapper__mainContainer');
  parent.appendChild(comp);
  console.log('Działa MainContainer!');
}

//*** */
function renderNavMenu(parent, activeItemNr = 0) {
  // * usuwa navMenu jeśli istnieje
  //*** */

  if (document.getElementById('navMenu'))
    parent.removeChild(document.getElementById('navMenu'));

  const comp = NavMenu([
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
  ]);

  comp.classList.add('wrapper__nav');
  parent.appendChild(comp);
  console.log('Działa navMenu!');
}
