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

  const gameOver = document.createElement('h2');
  gameOver.classList.add('content__gameOver');
  gameOver.textContent = 'game over';
  content.appendChild(gameOver);

  const finalResults = document.createElement('h2');
  finalResults.classList.add('content__finalResults');
  const playerResult = correctAnswersCounter(playerAnswers);
  const playerAnswersCountity = playerAnswers.length;
  const computerResult = correctAnswersCounter(computerAnswers);
  const computerAnswersCountity = computerAnswers.length;
  //we can also use variable for game time length
  finalResults.textContent = `The force is strong in you young Padawan! During 1 minute you have answered ${playerResult} / ${playerAnswersCountity} questions and Computer quessed ${computerResult} / ${computerAnswersCountity}.`;
  content.appendChild(finalResults);

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

  const yodaImage = document.createElement('div');
  yodaImage.classList.add('content__yodaImage');
  content.appendChild(yodaImage);

  const rowContainer = document.createElement('div');
  rowContainer.classList.add('content__rowContainer');

  const form = document.createElement('form');

  const input = document.createElement('input');
  input.classList.add('content__input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Type your name...');
  input.setAttribute('autocomplete', 'off');
  input.required = true;
  form.appendChild(input);
  rowContainer.appendChild(input);

  const inputTip = document.createElement('div');
  inputTip.textContent =
    'Please fill your name in order to receive eternal glory in whole Galaxy!';
  inputTip.classList.add('content__inputTip');
  rowContainer.appendChild(inputTip);
  content.appendChild(rowContainer);

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

  content.appendChild(form);

  return content;
};
