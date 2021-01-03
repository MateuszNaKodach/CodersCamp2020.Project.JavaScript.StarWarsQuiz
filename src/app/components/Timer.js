export const Timer = (duration) => {
  let minutes, seconds;

  const timerComp = document.createElement('div');
  timerComp.classList.add('timer');

  setInterval(function () {
    minutes = parseInt(duration / 60, 10);
    seconds = parseInt(duration % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerComp.textContent = `Time Left: ${minutes}m ${seconds}s`;

    if (--duration < 0) {
      duration = 0;
    }
  }, 1000);

  return timerComp;
};
