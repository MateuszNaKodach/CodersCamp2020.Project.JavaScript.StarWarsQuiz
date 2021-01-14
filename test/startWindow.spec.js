import { StartWindow } from '../src/app/components/StartWindow';
// import { StartWindow } from '../src/app/components/StartWindow';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/dom';

describe('StartWindow:', () => {
  const callBackFunction = jest.fn();
  const testStartWindowComponent = StartWindow(callBackFunction);

  it('When click on component then call callback function', () => {
    document.body.appendChild(testStartWindowComponent);
    testStartWindowComponent.setAttribute('data-testId', 'testComp');
    userEvent.click(testStartWindowComponent);

    expect(callBackFunction).toHaveBeenCalled();
  });

  it('When click on component then close/disappear this component', () => {
    document.body.appendChild(testStartWindowComponent);
    testStartWindowComponent.setAttribute('data-testId', 'testComp');
    userEvent.click(testStartWindowComponent);

    // expect(document.body).not.toContain(testStartWindowComponent); // ! Nie nadaje się do elementów HTML!
    expect(screen.queryByTestId('testComp')).not.toBeVisible();
    expect(document.body).not.toContainElement(testStartWindowComponent);
    expect(document.body).toBeEmpty();
  });
});

// TODO: Sprawdzić czy -> document.body.appendChild(startWindow) ;
