import { render } from '../rendering';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';
import { MainContainer } from './MainContainer';
import { QuestionImage } from './QuestionImage';

export const Wrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  wrapper.id = 'wrapper';

  setStartView(wrapper);

  return wrapper;
};

function setStartView(parent) {
  const logo = render({
    component: Logo(),
    inside: parent,
    withClasses: 'wrapper__logo',
  });

  const questionImage = render({
    component: QuestionImage('people', 4),
    inside: parent,
    withClasses: 'wrapper__mainImg',
  });
  questionImage.id = 'mainQuestionImage';

  const mainContainer = render({
    component: MainContainer(),
    inside: parent,
    withClasses: 'wrapper__mainContainer',
  });

  renderNavMenu(parent, mainContainer);
}

function renderNavMenu(
  parent,
  mainContainer,
  activeItemNr = 0,
  navMenuPreviousState = undefined,
) {
  if (parent && navMenuPreviousState) {
    parent.removeChild(navMenuPreviousState);
  }

  const navMenuComponent = NavMenu([
    {
      name: 'people',
      id: 'navMenu__people',
      isActivated: activeItemNr == 0,
      onClickFn() {
        onClickNavMenuButton(
          parent,
          0,
          navMenuComponent,
          'people',
          mainContainer,
        );
      },
    },
    {
      name: 'vehicles',
      id: 'navMenu__vehicles',
      isActivated: activeItemNr == 1,
      onClickFn() {
        onClickNavMenuButton(
          parent,
          1,
          navMenuComponent,
          'vehicles',
          mainContainer,
        );
      },
    },
    {
      name: 'starships',
      id: 'navMenu__starships',
      isActivated: activeItemNr == 2,
      onClickFn() {
        onClickNavMenuButton(
          parent,
          2,
          navMenuComponent,
          'starships',
          mainContainer,
        );
      },
    },
  ]);

  return render({
    component: navMenuComponent,
    inside: parent,
    withClasses: 'wrapper__nav',
  });
  console.log('Jestem funkcją renderNavMenu');
}

function onClickNavMenuButton(
  parent,
  gameModeItemNr = 0,
  navMenuPreviousState = undefined,
  gameModeName,
  mainContainer,
) {
  mainContainer.setGameModeFromMainContainer(gameModeName);

  renderNavMenu(parent, mainContainer, gameModeItemNr, navMenuPreviousState);
}
