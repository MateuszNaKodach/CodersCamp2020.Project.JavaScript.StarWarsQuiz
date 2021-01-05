export const ModalWindow = () => {
  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modalWindow');
  modalWindow.id = 'modalWindow';

  const contentBackground = document.createElement('div');
  contentBackground.classList.add('modalWindow__contentBackground');
  modalWindow.appendChild(contentBackground);

  return modalWindow;
};
