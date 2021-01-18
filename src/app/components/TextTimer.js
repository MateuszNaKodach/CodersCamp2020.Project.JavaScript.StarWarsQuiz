export const TextTimer = (timeSource) => {
  const timerContainer = document.createElement('div');
  timerContainer.id = 'quiz-timer';
  timerContainer.classList.add('timer');

  timerContainer.updateTextTime = (time) => {
    let minutes, seconds;

    minutes = parseInt(time / 60, 10);
    seconds = parseInt(time % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerContainer.textContent = `Time Left: ${minutes}m ${seconds}s`;
  };

  return timerContainer;
};
