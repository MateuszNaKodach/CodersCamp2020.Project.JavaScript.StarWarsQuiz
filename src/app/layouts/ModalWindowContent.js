import { Button } from '../components/Button';
import { render } from '../rendering';

export const ModalWindowContent = (
  playerAnswers,
  computerAnswers,
  onWindowClose,
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
  const playerAnswersQuantity = playerAnswers.length;
  const computerResult = correctAnswersCounter(computerAnswers);
  const computerAnswersQuantity = computerAnswers.length;
  const finalResults = render({
    component: document.createElement('div'),
    inside: content,
    withClasses: 'content__finalResults',
  });
  //we can also use variable for game time length
  finalResults.textContent = `The force is strong in you young Padawan! During 1 minute you have answered ${playerResult} / ${playerAnswersQuantity} questions and Computer quessed ${computerResult} / ${computerAnswersQuantity}.`;
  finalResults.setAttribute('data-testid', 'final-result-text');

  function correctAnswersCounter(answers) {
    if (answers) {
      const correctAnswers = answers.filter((elem) => elem.isCorrect);
      return correctAnswers.length;
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
  input.setAttribute('data-testid', 'username-input');
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
      onClickFn: onSubmit,
    }),
    inside: form,
  });
  button.setSpecial();
  button.setAttribute('data-testid', 'close-window-button');
  // button.setAttribute('type', 'button'); <-- but now there is "Form submission canceled because the form is not connected" in console after modal window close

  function onSubmit(e) {
    e.preventDefault();
    const isFormValid = input.checkValidity();
    if (isFormValid) {
      onWindowClose(input.value, playerResult, playerAnswersQuantity);
    }
  }

  return content;
};
