import { TextTimer } from '../src/app/components/TextTimer';
import '@testing-library/jest-dom';
import { MainTimer } from '../src/app/MainTimer';

describe('Timer component', () => {
  const mainTimer = new MainTimer(0);

  it("Should create visible timer container as div element with class and id attribute and text content 'Time Left: 00m 05s'", () => {
    const testTimer = TextTimer(mainTimer);
    testTimer.updateTextTime(5);

    expect(testTimer.tagName).toBe('DIV');
    expect(testTimer.id).toBe('quiz-timer');
    expect(testTimer).toHaveClass('timer');
    expect(testTimer).toBeVisible();
    expect(testTimer.textContent).toBe(`Time Left: 00m 05s`);
  });

  it("Given time value over 60 seconds, should create timer component with text content formated like this 'Time Left: 01m 30s'", () => {
    const testTimer = TextTimer(mainTimer);
    testTimer.updateTextTime(90);

    expect(testTimer.textContent).toBe('Time Left: 01m 30s');
  });
});
