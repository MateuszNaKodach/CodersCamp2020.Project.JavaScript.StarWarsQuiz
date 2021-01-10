export const Timer = (duration) => {
  let timer = duration;

  const timerContainer = document.createElement('div');
  timerContainer.id = 'quiz-timer';
  timerContainer.classList.add('timer');

  setInterval(() => {
    ({ timer } = countdown(timer, timerContainer));
  }, 1000);

  return timerContainer;
};

function countdown(timer, timerContainer) {
  let minutes, seconds;

  minutes = parseInt(timer / 60, 10);
  seconds = parseInt(timer % 60, 10);

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  timerContainer.textContent = `Time Left: ${minutes}m ${seconds}s`;

  if (--timer <= 0) {
    timer = 0;
  }
  return { timer };
}
