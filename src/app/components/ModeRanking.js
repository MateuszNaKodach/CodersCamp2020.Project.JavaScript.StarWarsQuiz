export const ModeRanking = (topScores) => {
  const modeRankingObj = document.createElement('div');
  modeRankingObj.classList.add('modeRanking');

  if (typeof topScores !== 'undefined' && topScores.length > 0) {
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
    rankingContainer.classList.add('rankingContainer');

    const placesList = ['1st', '2nd', '3rd'];

    const placeColumn = document.createElement('div');
    const placeHeader = document.createElement('div');
    placeHeader.textContent = 'Place';
    placeColumn.appendChild(placeHeader);
    placeColumn.setAttribute(`id`, `scoresColumnPlace`);
    placeColumn.classList.add('scoresColumn');
    placeColumn.classList.add('scoresColumn--place');
    rankingContainer.appendChild(placeColumn);

    for (let i = 0; i < placesList.length; i++) {
      const place = document.createElement('div');
      place.textContent = placesList[i];
      placeColumn.appendChild(place);
    }

    const playerColumn = document.createElement('div');
    const playerHeader = document.createElement('div');
    playerHeader.textContent = 'Player';
    playerColumn.appendChild(playerHeader);
    playerColumn.setAttribute(`id`, `scoreColumnPlayer`);
    playerColumn.classList.add(`scoresColumn`);
    playerColumn.classList.add(`scoresColumn--player`);
    rankingContainer.appendChild(playerColumn);

    const answeredColumn = document.createElement('div');
    const answeredHeader = document.createElement('div');
    answeredHeader.textContent = 'Answered';
    answeredColumn.appendChild(answeredHeader);
    answeredColumn.setAttribute(`id`, `scoreColumnAnswered`);
    answeredColumn.classList.add(`scoresColumn`);
    answeredColumn.classList.add(`scoresColumn--answered`);
    rankingContainer.appendChild(answeredColumn);

    for (let i = 0; i < topScores.length; i++) {
      const player = document.createElement('div');
      player.textContent = topScores[i].user;
      playerColumn.appendChild(player);
      const answered = document.createElement('div');
      answered.textContent = topScores[i].maxScore;
      answeredColumn.appendChild(answered);
    }
    modeRankingObj.appendChild(rankingContainer);
  } else {
    const emptyRankingElem = document.createElement('p');
    emptyRankingElem.classList.add('someClass');
    emptyRankingElem.textContent = 'Leaderboard is empty...';
    modeRankingObj.appendChild(emptyRankingElem);
  }

  return modeRankingObj;
};
