import { StartWindow } from './components/StartWindow';
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
import { Sword } from './components/Sword';
import { ModeRanking } from './components/ModeRanking';

export const App = ({ options }) => {
  const app = document.getElementById('swquiz-app');

  // ! dla programistów: nie pisać kodu poniżej
  // ! dla Tomasz i Piotr: Nasz kod poniżej
  // ! >>> TU NIE ZMIENIAĆ (NIC TU NIE DODAWAĆ) >>>

  app.innerHTML = '';
  const startWindow = render({
    component: StartWindow(() => {}),
    inside: app,
  });

  const wrapper = render({ component: Wrapper(), inside: app });

  // ! <<< TU NIE ZMIENIAĆ (NIC TU NIE DODAWAĆ) <<<
  // ! ---------------
  // ! ---------------
  // ! ---------------
  // ! ---------------
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
// console.log(
//   peopleQuestionGenerator.generateQuestion().then((res) => console.log(res)),
// );
// console.log(startshipsQuestionGenerator.generateQuestion());
