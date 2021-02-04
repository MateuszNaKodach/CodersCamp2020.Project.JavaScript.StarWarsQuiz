import { StartWindow } from './components/StartWindow';
import { NavMenu } from './layouts/NavMenu';
import { Wrapper } from './layouts/Wrapper';
import { QuestionGenerator } from './QuestionGenrator';
import { fetchData } from '../utils/fetchData';
import { getRandomIdFromArray } from '../utils/getRandomIdFromArray';
import { peopleIdArray, starshipsIdArray, vehiclesIdArray } from './settings';
import { render } from './rendering';

export const App = () => {
  const app = document.getElementById('swquiz-app');

  app.innerHTML = '';
  const startWindow = render({
    component: StartWindow(() => {}),
    inside: app,
  });

  const wrapper = render({ component: Wrapper(), inside: app });
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
