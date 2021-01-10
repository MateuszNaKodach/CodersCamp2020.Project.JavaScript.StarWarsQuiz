export const ModalWindow = () => {
  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modalWindow');
  modalWindow.id = 'modalWindow';

  const parent = document.getElementById('swquiz-app');
  parent.appendChild(modalWindow);

  const modalOverlay = ModalOverlay();
  withOverlay(modalWindow);

  function withOverlay(modalWindow) {
    modalWindow.appendChild(modalOverlay);
  }

  function ModalOverlay() {
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modalWindow__overlay');
    modalOverlay.id = 'overlay';
    return modalOverlay;
  }

  return {
    ...modalWindow,
    show(content) {
      if (content) {
        content.classList.add('modalWindow__content');
        content.id = 'overlayContent';
        modalOverlay.appendChild(content);
        modalWindow.style.display = 'block';
      }
    },
    close() {
      modalWindow.style.display = 'none';

      const contentToRemove = document.getElementById('overlayContent');
      contentToRemove.remove();
    },
  };
};
