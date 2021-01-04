export const Timer = (duration) => {
  let minutes, seconds;

  const timerContainer = document.createElement('div');
  timerContainer.id = 'quiz-timer';
  timerContainer.classList.add('timer');

  setInterval(() => {
    minutes = parseInt(duration / 60, 10);
    seconds = parseInt(duration % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerContainer.textContent = `Time Left: ${minutes}m ${seconds}s`;

    if (--duration <= 0) {
      duration = 0;
    }
  }, 1000);

  return timerContainer;
};
