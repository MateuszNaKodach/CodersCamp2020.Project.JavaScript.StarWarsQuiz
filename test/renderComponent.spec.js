import { SampleDivWithText, withTestId } from './testFixtures';
import { renderComponent } from './renderComponent';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';

describe('renderComponent', () => {
  it('should show rendered component', () => {
    renderComponent(aComponent);

    expect(screen.queryByTestId('sample-test-id')).toBeInTheDocument();
  });
});

const aComponent = withTestId({
  component: SampleDivWithText({
    text: 'Component to render inside Parent',
  }),
  testId: 'sample-test-id',
});
