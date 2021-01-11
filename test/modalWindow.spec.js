import { ModalWindow } from '../src/app/layouts/ModalWindow';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/dom';

describe('Modal Window', () => {
  it('when shown, then overlay and the content should be visible', () => {
    //Given
    const modalContent = testContent();
    const modalWindow = testModalWindow((parent) => ModalWindow(parent));

    //When
    modalWindow.show(modalContent);

    //Then
    expect(screen.queryByTestId('test-content')).toBeVisible();
    expect(screen.queryByTestId('test-modal-overlay')).toBeVisible();
    expect(screen.queryByTestId('test-modal-window')).toBeVisible();
  });

  it('when closed, then content should not be visible', () => {
    //Given
    const modalContent = testContent();
    const modalWindow = shownTestModalWindow((parent) => ModalWindow(parent), {
      content: modalContent,
    });

    //When
    modalWindow.close();

    //Then
    expect(screen.queryByTestId('test-content')).not.toBeInTheDocument();
    expect(screen.queryByTestId('test-modal-overlay')).not.toBeVisible();
    expect(screen.queryByTestId('test-modal-window')).not.toBeVisible();
  });

  it('when created, then should not be visible', () => {
    //When
    const modalWindow = testModalWindow((parent) => ModalWindow(parent));

    //Then
    expect(screen.queryByTestId('test-modal-overlay')).not.toBeVisible();
    expect(screen.queryByTestId('test-modal-window')).not.toBeVisible();
  });
});

function testModalWindow(modalFn) {
  document.body.innerHTML = `<div id="component-container"></div>`;
  const componentContainer = document.getElementById('component-container');
  const modalWindow = modalFn(componentContainer);
  modalWindow.setAttribute('data-testid', 'test-modal-window');
  modalWindow.style.display = 'none';
  const modalOverlay = modalWindow.querySelector('#overlay');
  modalOverlay.setAttribute('data-testid', 'test-modal-overlay');
  return modalWindow;
}

function shownTestModalWindow(modalFn, { content }) {
  const testModal = testModalWindow(modalFn);
  testModal.show(content);
  return testModal;
}

function testContent() {
  const testContent = document.createElement('div');
  testContent.setAttribute('data-testid', 'test-content');
  testContent.textContent = 'test content text';
  return testContent;
}
