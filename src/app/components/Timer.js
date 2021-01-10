export const Timer = (duration) => {
  let timer = duration,
    minutes,
    seconds;

  const timerContainer = document.createElement('div');
  timerContainer.id = 'quiz-timer';
  timerContainer.classList.add('timer');

  setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerContainer.textContent = `Time Left: ${minutes}m ${seconds}s`;

    if (--timer <= 0) {
      timer = 0;
    }
  }, 1000);

  return timerContainer;
};

function countdown() {}
