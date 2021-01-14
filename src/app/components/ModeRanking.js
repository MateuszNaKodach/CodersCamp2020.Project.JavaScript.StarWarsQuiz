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
    rankingContainer.classList.add('modeRanking__rankingContainer');

    const placesList = ['1st', '2nd', '3rd'];

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

    // * koniec pętli

    for (let i = 0; i < topScores.length; i++) {
      const playerRow = document.createElement('div');
      playerRow.classList.add('modeRanking__rankingRow');

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

      rankingContainer.appendChild(playerRow);
    }

    // * koniec pętli

    modeRankingObj.appendChild(rankingContainer);
  } else {
    const emptyRankingElem = document.createElement('p');
    emptyRankingElem.classList.add('modeRanking__text');
    emptyRankingElem.setAttribute('data-testid', '');
    emptyRankingElem.textContent = 'Leaderboard is empty...';
    modeRankingObj.appendChild(emptyRankingElem);
  }

  return modeRankingObj;
};
