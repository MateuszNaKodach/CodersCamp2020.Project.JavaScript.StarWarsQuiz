import { ModeRanking } from '../../src/app/components/ModeRanking';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

describe('Players ranking', () => {
  const sampleRanking = [
    {
      user: 'user1',
      score: 15,
      maxScore: 30,
    },
    {
      user: 'user2',
      score: 18,
      maxScore: 40,
    },
    {
      user: 'user3',
      score: 15,
      maxScore: 25,
    },
  ];

  const emptyRanking = [];

  it("Given an empty array should render component with paragraph 'Leaderboard is empty...' text inside", () => {
    document.body.innerHTML = `<div id="component-parent"></div>`;
    const parent = document.querySelector('#component-parent');
    const rankingComponent = ModeRanking(emptyRanking);
    parent.appendChild(rankingComponent);

    expect(screen.getByText('Leadboard is empty...')).toBeInTheDocument();
  });
});
