import { StartWindow } from '../src/app/components/StartWindow';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';

describe('StartWindow:', () => {
  const callBackFunction = jest.fn();
  const testStartWindowComponent = StartWindow(callBackFunction);

  it('When click on component then call callback function', () => {
    document.body.appendChild(testStartWindowComponent);
    testStartWindowComponent.setAttribute('data-testId', 'testComp');

    const testedElem = screen.queryByTestId('testComp');

    userEvent.click(testedElem);

    expect(callBackFunction).toHaveBeenCalled();
  });

  it('When click on component then close/disappear this component', () => {
    document.body.appendChild(testStartWindowComponent);
    testStartWindowComponent.setAttribute('data-testId', 'testComp');

    const testedElem = screen.queryByTestId('testComp');

    userEvent.click(testedElem);

    expect(document.body).not.toContainElement(testStartWindowComponent);
  });
});
