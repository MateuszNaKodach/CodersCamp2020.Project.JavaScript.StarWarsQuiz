import { TextTimer, countdown } from '../src/app/components/Timer';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';

describe('Timer component', () => {
  beforeEach(jest.useFakeTimers);

  it('Should create timer container as div element with class and id attribute', () => {
    const testTimer = TextTimer(30);

    expect(testTimer.tagName).toBe('DIV');
    expect(testTimer.id).toBe('quiz-timer');
    expect(testTimer).toHaveClass('timer');
    expect(testTimer).toBeVisible();
  });

  it('Should call setInterval function 1 time with cb function', () => {
    TextTimer();

    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});
