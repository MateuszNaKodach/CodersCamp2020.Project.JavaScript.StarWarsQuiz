export const ModeRanking = (topScores) => {
  const modeRankingObj = document.createElement('div');
  modeRankingObj.classList.add('modeRanking');

  const headerContainer = document.createElement('div');
  headerContainer.classList.add('modeRanking__headerContainer');

  const rankingIcon = document.createElement('span');
  rankingIcon.classList.add('modeRanking__icon');
  headerContainer.appendChild(rankingIcon);

  const rankingHeader = document.createElement('h2');
  rankingHeader.classList.add('modeRanking__header');
  rankingHeader.innerText = 'Mode Ranking';
  headerContainer.appendChild(rankingHeader);

  modeRankingObj.appendChild(headerContainer);

  const rankingContainer = document.createElement('div');
  rankingContainer.classList.add('modeRanking__rankingContainer');

  createHeaderRow(rankingContainer);

  const rankingIsFilled = topScores && topScores.length > 0;
  rankingIsFilled
    ? createRankingWithScores(rankingContainer, topScores)
    : createEmptyRanking(rankingContainer);

  modeRankingObj.appendChild(rankingContainer);

  return modeRankingObj;
};

function createHeaderRow(rankingContainer) {
  const titleRow = document.createElement('header');
  titleRow.classList.add(
    'modeRanking__rankingRow',
    'modeRanking__rankingRow--title',
  );

  const headerElementTitles = ['Place', 'Player', 'Answered'];

  for (let i = 0; i < headerElementTitles.length; i++) {
    rankingContainer.appendChild(titleRow);
    const headerElement = document.createElement('div');
    headerElement.classList.add(
      'modeRanking__headerItem',
      `modeRanking__headerItem--${headerElementTitles[i].toLowerCase()}`,
    );
    headerElement.textContent = headerElementTitles[i];
    titleRow.appendChild(headerElement);
  }
}

function createRankingWithScores(htmlElement, topScores) {
  const placesList = ['1st', '2nd', '3rd'];

  const rankingWithScores = htmlElement;

  for (let i = 0; i < topScores.length; i++) {
    const playerRow = document.createElement('div');
    playerRow.classList.add('modeRanking__rankingRow');
    playerRow.setAttribute('data-testId', `playerRowNum${i + 1}`); // Attribute needed only for testing purpose.

    const playerNumber = document.createElement('div');
    let numberText = placesList[i];
    playerNumber.textContent = numberText;
    playerNumber.classList.add('modeRanking__rankingPlace');
    playerRow.appendChild(playerNumber);

    const playerName = document.createElement('div');
    playerName.textContent = topScores[i].user;
    playerName.classList.add('modeRanking__rankingPlayer');
    playerRow.appendChild(playerName);

    const playerAnswered = document.createElement('div');
    playerAnswered.textContent = `${topScores[i].score}/${topScores[i].maxScore}`;
    playerAnswered.classList.add('modeRanking__rankingAnswered');
    playerRow.appendChild(playerAnswered);
    rankingWithScores.appendChild(playerRow);
  }
}

function createEmptyRanking(rankingContainer) {
  const emptyRankingElem = document.createElement('p');
  emptyRankingElem.classList.add('modeRanking__emptyLeaderboardText');
  emptyRankingElem.setAttribute('data-testid', '');
  emptyRankingElem.textContent = 'Leaderboard is empty...';
  rankingContainer.appendChild(emptyRankingElem);
}
