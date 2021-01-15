export class MainTimer {
  constructor(time) {
    this.time = time;
  }

  startCountdown(callbackUpdateTimeFunction) {
    const timer = setInterval(() => {
      callbackUpdateTimeFunction(this.time);
      if (this.time <= 0) {
        clearInterval(timer);
      }
      this.time -= 1;
    }, 1000);
  }
}
