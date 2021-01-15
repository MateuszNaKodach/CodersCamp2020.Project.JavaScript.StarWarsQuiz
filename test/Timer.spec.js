import { TextTimer } from '../src/app/components/TextTimer';
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

  it('Should call updateTextTime function with argument 2 when textTimer is 00:02 ', () => {
    const testTextTimer = TextTimer();
    testTextTimer.updateTextTime();

    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });

  it('Should call setInterval function 1 time with cb function', () => {
    const testTextTimer = TextTimer();
    testTextTimer.updateTextTime();

    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});
