export class ModalWindow {
  constructor() {
    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modalWindow');
    modalWindow.id = 'modalWindow';

    const parent = document.getElementById('swquiz-app');
    parent.appendChild(modalWindow);
  }

  show(content) {
    // ""Komponent umożliwia wyświetlenie okna modalnego z zawartością przekazaną jako inny komponent na wejściu do funkcji.""
    // wiadomo jaki będzie typ komponentu jaki przyjdzie? Bo if (content) to chyba średni warunek...
    if (content) {
      content.classList.add('modalWindow__content');

      // create background for content
      const contentBackground = document.createElement('div');
      contentBackground.classList.add('modalWindow__contentBackground');
      contentBackground.id = 'modalWindow-bg';
      modalWindow.appendChild(contentBackground);

      contentBackground.appendChild(content);
      modalWindow.style.display = 'block';
    }
  }

  close() {
    modalWindow.style.display = 'none';

    const contentToRemove = document.getElementById('modalWindow-bg');
    contentToRemove.remove();
  }
}
