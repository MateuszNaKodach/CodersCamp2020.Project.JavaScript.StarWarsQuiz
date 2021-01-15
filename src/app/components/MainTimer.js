export class MainTimer {
  constructor(time) {
    this.time = time;
    this.observers = [];
  }

  subscribe(watcher) {
    this.observers.push(watcher);
  }

  unsubscribe(watcher) {
    this.observers = this.observers.filter(
      (subscriber) => subscriber !== watcher,
    );
  }

  notify(data) {
    data = this.time;
    this.observers.forEach((observer) => observer(data));
  }

  countdown() {
    const timer = setInterval(() => {
      console.log(this.time);
      this.time -= 1;
      if (this.time <= 0) {
        console.log(this.time);
        clearInterval(timer);
      }
    }, 1000);
  }
}
