// import { Sword } from '../src/app/components/Sword';
import '@testing-library/jest-dom';
import { Sword } from '../../src/app/components/Sword';

describe('Sword component', () => {
  it('Sword component should be created', () => {
    const sword = Sword();
    expect(sword).toHaveClass('sword');
    expect(sword).toBeVisible();
  });
});
