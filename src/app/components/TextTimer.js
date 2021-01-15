export const TextTimer = (timeSource) => {
  const timerContainer = document.createElement('div');
  timerContainer.id = 'quiz-timer';
  timerContainer.classList.add('timer');

  // console.log(timeSource.time);

  // timerContainer.textContent = `${timeSource.time}`;
  // timeSource.countdown();

  // countdown(timeSource.time, timerContainer);
  timerContainer.updateTextTime = (time) => {
    // this.textContent = `${timeSource.time}`;
    let minutes, seconds;

    minutes = parseInt(time / 60, 10);
    seconds = parseInt(time % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerContainer.textContent = `Time Left: ${minutes}m ${seconds}s`;
  };

  return timerContainer;
};

function countdown(timer, htmlElem) {
  let minutes, seconds;

  minutes = parseInt(timer / 60, 10);
  seconds = parseInt(timer % 60, 10);

  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  htmlElem.textContent = `Time Left: ${minutes}m ${seconds}s`;
}
