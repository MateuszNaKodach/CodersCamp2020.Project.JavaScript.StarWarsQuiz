import { Button } from '../components/Button';
import { render } from '../rendering';

export const ModalWindowContent = (
  playerAnswers,
  computerAnswers,
  onCloseFunction,
) => {
  const content = document.createElement('div');
  content.classList.add('content');
  content.id = 'content';

  const gameOver = render({
    component: document.createElement('div'),
    inside: content,
    withClasses: 'content__gameOver',
  });
  gameOver.textContent = 'game over';

  const playerResult = correctAnswersCounter(playerAnswers);
  const playerAnswersCountity = playerAnswers.length;
  const computerResult = correctAnswersCounter(computerAnswers);
  const computerAnswersCountity = computerAnswers.length;
  const finalResults = render({
    component: document.createElement('div'),
    inside: content,
    withClasses: 'content__finalResults',
  });
  //we can also use variable for game time length
  finalResults.textContent = `The force is strong in you young Padawan! During 1 minute you have answered ${playerResult} / ${playerAnswersCountity} questions and Computer quessed ${computerResult} / ${computerAnswersCountity}.`;

  function correctAnswersCounter(answers) {
    if (answers) {
      let counter = 0;
      for (const answer of answers) {
        if (answer.isCorrect) {
          counter += 1;
        }
      }
      return counter;
    }
  }

  const yodaImage = render({
    component: document.createElement('div'),
    inside: content,
    withClasses: 'content__yodaImage',
  });

  const form = render({
    component: document.createElement('form'),
    inside: content,
  });

  const rowContainer = render({
    component: document.createElement('div'),
    inside: form,
    withClasses: 'content__rowContainer',
  });

  const input = render({
    component: document.createElement('input'),
    inside: rowContainer,
    withClasses: 'content__input',
  });
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Type your name...');
  input.setAttribute('autocomplete', 'off');
  input.required = true;

  const inputTip = render({
    component: document.createElement('div'),
    inside: rowContainer,
    withClasses: 'content__inputTip',
  });
  inputTip.textContent =
    'Please fill your name in order to receive eternal glory in whole Galaxy!';

  const button = render({
    component: Button({
      id: 'mayTheForceBeWithYouButton',
      btnText: 'may the force be with you!',
      classList: ['content__submitButton'],
      onClickFn: onCloseFunction,
    }),
    inside: form,
  });
  button.setSpecial();

  return content;
};
