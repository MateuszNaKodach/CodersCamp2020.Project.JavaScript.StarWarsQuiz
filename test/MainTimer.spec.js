import { MainTimer } from '../src/app/MainTimer';

describe('Main timer', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('Given 5 seconds, main container should countdown by 1 every 1 second until it reaches 0', () => {
    const timer = new MainTimer(5);
    const firstCallbackFunction = jest.fn();
    const secondCallbackFunction = jest.fn();

    timer.startCountdown(firstCallbackFunction, secondCallbackFunction);

    //One second has passed
    jest.advanceTimersByTime(1000);

    expect(timer.time).toBe(4);

    //Two seconds have passed
    jest.advanceTimersByTime(1000);

    expect(timer.time).toBe(3);

    //Three seconds have passed
    jest.advanceTimersByTime(1000);

    expect(timer.time).toBe(2);

    //Four seconds have passed
    jest.advanceTimersByTime(1000);

    expect(timer.time).toBe(1);

    //Five seconds have passed
    jest.advanceTimersByTime(1000);

    expect(timer.time).toBe(0);
  });

  it('Given 3 seconds, main timer should call firstCallbackFunction 3 times (once every second that has passsed)', () => {
    const timer = new MainTimer(2);
    const firstCallbackFunction = jest.fn();
    const secondCallbackFunction = jest.fn();

    timer.startCountdown(firstCallbackFunction, secondCallbackFunction);

    expect(firstCallbackFunction).not.toBeCalled();

    //One second has passed
    jest.advanceTimersByTime(1000);

    expect(firstCallbackFunction).toBeCalled();
    expect(firstCallbackFunction).toHaveBeenCalledTimes(1);

    //Two seconds have passed
    jest.advanceTimersByTime(1000);

    expect(firstCallbackFunction).toBeCalled();
    expect(firstCallbackFunction).toHaveBeenCalledTimes(2);

    //Three seconds have passed
    jest.advanceTimersByTime(1000);

    expect(firstCallbackFunction).toBeCalled();
    expect(firstCallbackFunction).toHaveBeenCalledTimes(3);
  });

  it('Given 2 seconds, main timer should call secondCallbackFunction only once when countdown reaches 0 (main timers property time will have value -1)', () => {
    const timer = new MainTimer(2);
    const firstCallbackFunction = jest.fn();
    const secondCallbackFunction = jest.fn();

    timer.startCountdown(firstCallbackFunction, secondCallbackFunction);
    expect(secondCallbackFunction).not.toBeCalled();

    //One second has passed
    jest.advanceTimersByTime(1000);

    expect(secondCallbackFunction).not.toBeCalled();

    //Two seconds have passed
    jest.advanceTimersByTime(1000);
    jest.advanceTimersByTime(1000);

    expect(secondCallbackFunction).toBeCalled();
    expect(secondCallbackFunction).toHaveBeenCalledTimes(1);
  });
});
