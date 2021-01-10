import { ModalWindow } from '../src/app/layouts/ModalWindow';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';

describe('Function that creates,show and close modal window', () => {
  const parent = document.createElement('div');
  parent.setAttribute('data-testid', 'test-parent');
  const modalWindow = ModalWindow(parent);
  const testContent = document.createElement('div');
  testContent.setAttribute('data-testid', 'test-content');
  testContent.textContent = 'test content';

  it('Should display modal window with content', () => {
    modalWindow.show(testContent);
    document.body.innerHTML = parent.innerHTML;

    expect(modalWindow).toBeVisible();
    expect(screen.queryByTestId('test-content')).toHaveTextContent(
      'test content',
    );
  });

  it('Should hide modal window and delete content', () => {
    const overlay = modalWindow.firstChild;
    overlay.setAttribute('data-testid', 'test-overlay');
    document.body.innerHTML = parent.innerHTML;

    // here modalWindow contain content
    console.log('modalWindow', modalWindow.innerHTML);

    modalWindow.close();
    // here modalWindow still contain content...why?
    console.log('modalWindow after close method', modalWindow.innerHTML);

    expect(modalWindow).not.toBeVisible();
    // in that case this test is wrong ... -.-
    expect(screen.queryByTestId('test-overlay')).toBeEmptyDOMElement();
  });
});
