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

// *****************************************************
// *****************************************************
// *****************************************************

function setStartView(parent) {
  const logo = render({
    component: Logo(),
    inside: parent,
    withClasses: 'wrapper__logo',
  });

  const questionImage = render({
    component: QuestionImage(
      'c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzQuanBn',
    ),
    inside: parent,
    withClasses: 'wrapper__mainImg',
  });

  const mainContainer = render({
    component: MainContainer(),
    inside: parent,
    withClasses: 'wrapper__mainContainer',
  });

  renderNavMenu(parent);
}

// *****************************************************

function renderNavMenu(
  parent,
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
        onClickNavMenuButton(parent, mainContainer, 0, 'people');
      },
    },
    {
      name: 'vehicles',
      id: 'navMenu__vehicles',
      isActivated: activeItemNr == 1,
      onClickFn() {
        onClickNavMenuButton(parent, mainContainer, 1, 'vehicles');
      },
    },
    {
      name: 'starships',
      id: 'navMenu__starships',
      isActivated: activeItemNr == 2,
      onClickFn() {
        onClickNavMenuButton(parent, mainContainer, 2, 'starships');
      },
    },
  ]);

  return render({
    component: navMenuComponent,
    inside: parent,
    withClasses: 'wrapper__nav',
  });
}

// *****************************************************

function onClickNavMenuButton(
  parent,
  gameModeItemNr = 0,
  navMenuPreviousState = undefined,
  gameModeName,
) {
  // mainContainer.remove();
  // parent.removeChild(previousState);

  // TODO: TU WYWPOŁAJ funkcję ktora jest w maincontainer i renderuje nowy komponent albo coś
  // const updatedMainContainer = render({
  //   component: MainContainer(gameModeName),
  //   inside: parent,
  //   withClasses: 'wrapper__mainContainer',
  // });

  renderNavMenu(parent, gameModeItemNr, navMenuPreviousState);
}

// *****************************************************
// *****************************************************
// *****************************************************

// TODO: Kliknięcie w nav menu wywołuje funkcję (cleanAndFill() lub cleanAndFillMainContainer() - nazwa do wyboru):
// TODO: -- niszczy dzieci mainContainer
// TODO: -- niszczy wywpłuje wypelnienie mainContainer
// TODO: -- oparty na "switch"?

// TODO: Wypełnij main mainContainer:

// TODO:  funkcja wywołująca ustawine początkowe
// TODO:  -- Mode Title
// TODO:  -- Container (Rules lub ranking)
// TODO:  -- Dwa przyciski
// TODO:  funkcja podmieniająca  btn na ranking
// TODO:  -- small container
// TODO:  -- btns

// TODO: Kliknięcie przycisku PLAY wywoła metodę cleanAndFill();
// TODO:
// TODO:
// TODO:
// TODO:
// TODO:
// TODO:
