import { ModeRanking } from '../../src/app/components/ModeRanking';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { renderComponent } from '../renderComponent';

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

  const rankingWithTwoUsers = [
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
  ];

  it("Given an empty array should render component with paragraph 'Leaderboard is empty...' text inside and not contain any player info row", () => {
    renderComponent(ModeRanking(emptyRanking));

    expect(screen.getByText('Leaderboard is empty...')).toBeInTheDocument();
    expect(screen.queryByTestId('playerRowNum1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('playerRowNum2')).not.toBeInTheDocument();
    expect(screen.queryByTestId('playerRowNum3')).not.toBeInTheDocument();
  });

  it('Given an array with scores of three players should render ranking with names and results of each player', () => {
    renderComponent(ModeRanking(sampleRanking));

    const firstPlayerRow = screen.getByTestId('playerRowNum1');
    const secondPlayerRow = screen.getByTestId('playerRowNum2');
    const thirdPlayerRow = screen.getByTestId('playerRowNum3');

    expect(screen.getByText('user1')).toBeInTheDocument();
    expect(screen.getByText('user2')).toBeInTheDocument();
    expect(screen.getByText('user3')).toBeInTheDocument();
    expect(firstPlayerRow).toContainElement(screen.getByText('user1'));
    expect(firstPlayerRow).toContainElement(screen.getByText('15/30'));
    expect(secondPlayerRow).toContainElement(screen.getByText('user2'));
    expect(secondPlayerRow).toContainElement(screen.getByText('18/40'));
    expect(thirdPlayerRow).toContainElement(screen.getByText('user3'));
    expect(thirdPlayerRow).toContainElement(screen.getByText('15/25'));
  });

  it('Given an array with only 2 players component should reneder with only 2 scores rows', () => {
    renderComponent(ModeRanking(rankingWithTwoUsers));

    const firstPlayerRow = screen.getByTestId('playerRowNum1');
    const secondPlayerRow = screen.getByTestId('playerRowNum2');

    expect(firstPlayerRow).toBeInTheDocument();
    expect(secondPlayerRow).toBeInTheDocument();
    expect(screen.queryByTestId('playerRowNum3')).toBeFalsy();
  });
});
