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
    component: QuestionImage('people', 4),
    inside: parent,
    withClasses: 'wrapper__mainImg',
  });

  const mainContainer = render({
    component: MainContainer(),
    inside: parent,
    withClasses: 'wrapper__mainContainer',
  });

  renderNavMenu(parent, mainContainer);
}

// *****************************************************

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

// *****************************************************

function onClickNavMenuButton(
  parent,
  gameModeItemNr = 0,
  navMenuPreviousState = undefined,
  gameModeName,
  mainContainer,
) {
  // mainContainer.remove();
  // parent.removeChild(previousState);

  // TODO: TU WYWPOŁAJ funkcję ktora jest w maincontainer i renderuje nowy komponent albo coś

  // console.log(mainContainer);
  // console.log(gameModeName);
  mainContainer.setGameModeFromMainContainer(gameModeName);

  // console.log('Pochodzę z onClicka');
  // console.log(parent);
  // console.log(gameModeItemNr);
  // console.log(navMenuPreviousState);
  renderNavMenu(parent, mainContainer, gameModeItemNr, navMenuPreviousState);
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
