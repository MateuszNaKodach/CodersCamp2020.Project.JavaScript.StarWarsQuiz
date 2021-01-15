export const TextTimer = (timeSource) => {
  const timerContainer = document.createElement('div');
  timerContainer.id = 'quiz-timer';
  timerContainer.classList.add('timer');

  // timeSource.countdown();

  countdown(timeSource.time, timerContainer);

  return timerContainer;
};

function countdown(timer, htmlElem) {
  let minutes, seconds;

  minutes = parseInt(timer.time / 60, 10);
  seconds = parseInt(timer.time % 60, 10);

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  htmlElem.textContent = `Time Left: ${minutes}m ${seconds}s`;
}
