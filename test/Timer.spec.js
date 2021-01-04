import { Timer } from '../src/app/components/Timer';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';

describe('Timers component', () => {
  beforeEach(jest.useFakeTimers);

  describe('Element creation', () => {
    it('Should create timer container with class and id attribute', () => {
      const testTimer = Timer(30);

      expect(testTimer.tagName).toBe('DIV');
      expect(testTimer.id).toBe('quiz-timer');
      expect(testTimer).toHaveClass('timer');
    });
  });

  describe('Countdown logic', () => {
    it('dunno', () => {
      Timer();

      expect(setInterval).toHaveBeenCalledTimes(1);
      expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    });
  });
});
