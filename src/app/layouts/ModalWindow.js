export const ModalWindow = (
  content,
  closeWindow = () => {
    this.style.display = none;
  },
) => {
  // create modal window with content box
  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modalWindow');
  modalWindow.id = 'modalWindow';

  const parent = document.getElementById('swquiz-app');
  parent.appendChild(modalWindow);

  const contentBackground = document.createElement('div');
  contentBackground.classList.add('modalWindow__contentBackground');
  modalWindow.appendChild(contentBackground);

  if (content) {
    content.classList.add('modalWindow__content');
    contentBackground.appendChild(content);
  }

  // if (closeWindow) {
  //   modalWindow.style.display = none;
  // }

  return modalWindow;
};
