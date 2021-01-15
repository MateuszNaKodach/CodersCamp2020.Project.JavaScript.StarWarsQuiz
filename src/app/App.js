import { NavMenu } from './layouts/NavMenu';
import { QuestionImage } from './layouts/QuestionImage';
import { Logo } from './layouts/Logo';
import { MainContainer } from './layouts/MainContainer';
import { Wrapper } from './layouts/Wrapper';
import { Button } from './components/Button';
import { QuestionGenerator } from './QuestionGenrator';
import { fetchData } from '../utils/fetchData';
import { getRandomIdFromArray } from '../utils/getRandomIdFromArray';
import { peopleIdArray, starshipsIdArray, vehiclesIdArray } from './settings';
import { ModalWindow } from './layouts/ModalWindow';
import { ModalWindowContent } from './layouts/ModalWindowContent';
import { GameMode } from './components/GameMode';
import { render } from './rendering';
import { QuestionAnswers } from './components/QuestionAnswers';
import { ModeRules } from './components/ModeRules';

export const App = ({ options }) => {
  const app = document.getElementById('swquiz-app');
  const wrapper = render({ component: Wrapper(), inside: app });
  const navMenu = renderNavMenu(wrapper);
  const logo = render({
    component: Logo(),
    inside: wrapper,
    withClasses: 'wrapper__logo',
  });
  const mainContainer = render({
    component: MainContainer(),
    inside: wrapper,
    withClasses: 'wrapper__mainContainer',
  });
  const questionImage = render({
    component: QuestionImage('people', 4),
    inside: wrapper,
    withClasses: 'wrapper__mainImg',
  });
  const gameMode = render({
    component: GameMode(),
    inside: mainContainer,
    withClasses: 'mainContainer__gameMode',
  });
  const modeRules = render({
    //component: ModeRules('You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select who from Star Wars is showed on the left (Jar Jar Binks right now) from available options'),
    component: ModeRules(),
    inside: mainContainer,
    withClasses: 'mainContainer__modeRules',
  });
  const hallOfFameButton = render({
    component: Button({
      id: 'hallOfFameButton',
      btnText: 'HallOfFame',
      classList: ['mainContainer__hallOfFameButton'],
      onClickFn: undefined,
      icon: 'fame',
    }),
    inside: mainContainer,
  });

  const playTheGameButton = render({
    component: Button({
      id: 'playTheGameButton',
      btnText: 'play the game',
      classList: ['mainContainer__playTheGameButton'],
      onClickFn: startGame,
    }),
    inside: mainContainer,
  });
  playTheGameButton.setSpecial();
  const questionAnswers = render({
    component: QuestionAnswers(
      ['Luke Skywalker', 'Jar Jar Binks', 'Padme Amidala', 'Darth Vader'],
      'Darth Vader',
      onAnswerChosen,
    ),
    //component: QuestionAnswers(answers, correctAnswer, onAnswerChosen),
    inside: mainContainer,
    withClasses: 'mainContainer__answersWrapper',
  });

  // Modal window
  const modalWindow = ModalWindow(app);
  // Modal window methods
  // modalWindow.show(Here_some_content_as_HTMLElement);
  // modalWindow.close  to close the window and remove the content

  /* MODAL WINDOW CONTENT TO REMOVE LATER!
  const testButton = render({
    component: Button({
      id: 'abcd',
      btnText: 'TEST BUTTON',
      classList: [''],
      onClickFn: testFunction,
    }),
    inside: app,
  });

  function testFunction() {
    const contemodalWindowContent = ModalWindowContent(
      [
        { id: 1, isCorrect: true },
        { id: 2, isCorrect: true },
      ],
      [
        { id: 1, isCorrect: false },
        { id: 2, isCorrect: true },
      ],
      onSubmitFunction,
    );

    modalWindow.show(contemodalWindowContent);
  }

  function onSubmitFunction(playerName, playerResult, playerAnswersQuantity) {
    modalWindow.close();
  }
  */
};

function renderNavMenu(parent, activeItemNr = 0, previousState = undefined) {
  if (parent && previousState) {
    parent.removeChild(previousState);
  }

  const component = NavMenu([
    {
      name: 'people',
      id: 'navMenu__people',
      isActivated: activeItemNr == 0,
      onClickFn() {
        renderNavMenu(parent, 0, component);
      },
    },
    {
      name: 'vehicles',
      id: 'navMenu__vehicles',
      isActivated: activeItemNr == 1,
      onClickFn() {
        renderNavMenu(parent, 1, component);
      },
    },
    {
      name: 'starships',
      id: 'navMenu__starships',
      isActivated: activeItemNr == 2,
      onClickFn() {
        renderNavMenu(parent, 2, component);
      },
    },
  ]);

  return render({ component, inside: parent, withClasses: 'wrapper__nav' });
}

const startGame = () => console.log('witaj w grze');
const onAnswerChosen = (...params) => console.log(params);

const fetchModeData = (mode, id) =>
  fetchData(mode, id, () =>
    fetch(`https://swapi.dev/api/${mode}/${id}/`).then((response) =>
      response.json(),
    ),
  );
const peopleQuestionGenerator = new QuestionGenerator(
  'people',
  () => getRandomIdFromArray(peopleIdArray),
  fetchModeData,
);
const startshipsQuestionGenerator = new QuestionGenerator(
  'starships',
  () => getRandomIdFromArray(starshipsIdArray),
  fetchModeData,
);
const vehiclesQuestionGenerator = new QuestionGenerator(
  'vehicles',
  () => getRandomIdFromArray(vehiclesIdArray),
  fetchModeData,
);

// how to get data from QuestionGenerator
// console.log(peopleQuestionGenerator.generateQuestion().then(res => console.log(res)));
// console.log(startshipsQuestionGenerator.generateQuestion());
