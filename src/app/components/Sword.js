export const Sword = () => {
  const component = document.createElement('div');
  component.classList.add('sword');

  const swordWrap = document.createElement('div');
  swordWrap.classList.add('sword-wrap');
  component.appendChild(swordWrap);

  const swordHilt = document.createElement('div');
  swordHilt.classList.add('sword-hilt');
  swordWrap.appendChild(swordHilt);

  const swordHiltImage = document.createElement('img');
  swordHiltImage.classList.add('sword-hilt-image');
  swordHiltImage.setAttribute('src', 'static/assets/ui/LightsaberHandle.png');
  swordHilt.appendChild(swordHiltImage);

  const powerTrack = document.createElement('div');
  powerTrack.classList.add('power-track');
  swordWrap.appendChild(powerTrack);

  const powerTrackLight = document.createElement('div');
  powerTrackLight.classList.add('power-track-light');
  powerTrack.appendChild(powerTrackLight);

  const startCountingDown = () => {
    powerTrackLight.classList.add('swordAnimation');
  };

  const button = document.querySelector('.mainContainer__playTheGameButton');
  button.addEventListener('click', startCountingDown);

  return component;
};
