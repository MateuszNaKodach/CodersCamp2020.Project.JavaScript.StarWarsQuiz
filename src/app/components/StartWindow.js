export const StartWindow = (callBackFunction) => {
  const renderedComponent = document.createElement('section');
  renderedComponent.classList.add('startWindow');

  const deathStarImageComponent = document.createElement('img');
  deathStarImageComponent.setAttribute(
    'src',
    '../../static/assets/ui/DeathStar.png',
  );
  deathStarImageComponent.classList.add('startWindow__deathStar');

  const startGameInformation = document.createElement('span');
  startGameInformation.classList.add('startWindow__startGameInformation');
  startGameInformation.innerHTML = 'Click <br> to start the game!';

  const deathStarContainer = document.createElement('div');
  deathStarContainer.classList.add('startWindow__deathStarContainer');

  const fadeComponent = document.createElement('div');
  fadeComponent.classList.add('startWindow__fadeComponent');

  const trailerComponent = document.createElement('article');
  trailerComponent.classList.add('startWindow__trailerComponent');
  const crawlElement = document.createElement('div');
  crawlElement.classList.add('startWindow__crawlElement');
  const header = document.createElement('div');
  header.classList.add('startWindow__header');
  const episodeSubtitle = document.createElement('h1');
  episodeSubtitle.classList.add('startWindow__episodeSubtitle');
  episodeSubtitle.textContent = 'Episode IV';
  const episodeTitle = document.createElement('p');
  episodeTitle.classList.add('startWindow__episodeTitle');
  // ? episodeTitle.textContent = 'A New Hope';
  episodeTitle.textContent = 'Coders Camp cereals';
  const firstParagraph = document.createElement('p');
  firstParagraph.classList.add(
    'startWindow__paragraph',
    'startWindow__paragraph--first',
  );
  firstParagraph.textContent = firstParagraphText;
  const secondParagraph = document.createElement('p');
  secondParagraph.classList.add(
    'startWindow__paragraph',
    'startWindow__paragraph--second',
  );
  secondParagraph.textContent = secondParagraphText;
  const thirdParagraph = document.createElement('p');
  thirdParagraph.classList.add(
    'staratWindow__paragraph',
    'startWindow__paragraph--third',
  );
  thirdParagraph.textContent = thirdParagraphText;

  // !  RENDERY
  renderedComponent.appendChild(fadeComponent);
  renderedComponent.appendChild(trailerComponent);
  renderedComponent.appendChild(deathStarContainer);
  deathStarContainer.appendChild(deathStarImageComponent);
  deathStarContainer.appendChild(startGameInformation);
  trailerComponent.appendChild(crawlElement);
  crawlElement.appendChild(header);
  header.appendChild(episodeSubtitle);
  header.appendChild(episodeTitle);
  crawlElement.appendChild(firstParagraph);
  crawlElement.appendChild(secondParagraph);
  crawlElement.appendChild(thirdParagraph);

  renderedComponent.addEventListener('click', (e) => {
    callBackFunction();
    console.log('Piotr Rynio  & Tomasz Dworniczak pozdrawiają! ');
    renderedComponent.remove();
  });

  return renderedComponent;
};

// prettier-ignore
const firstParagraphText = 'It is a period of CodersCamp2020. Programmers spaceships, striking from a hidden base, have won their first victory against the evil Galactic Cereal Empire.';
const secondParagraphText =
  'During the battle, programmers managed to steal SECRET RECIPE for the Empire’s ultimate cereals, the DEATH STARS, a chocolate-nutty flavoured, Death-Star-shaped with extraordinary crispiness cornflakes with power to rule them all.';
const thirdParagraphText =
  'Pursued by the Empire’s sinister agents, Mentor Mateusz and his team races home aboard his starship, custodian of the stolen recipe that can give him power to conquer The Cereal Galaxy….';
