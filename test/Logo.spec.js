import { Logo } from '../src/app/layouts/Logo';

describe('Logo', () => {
  it('Test logo with "logo" exist', () => {
    const comp = new Logo();
    expect(comp.id).toBe('logo');
  });

  it('Check if the link is correct', () => {
    const comp = new Logo();
    expect(comp.href).toBe(`.`);
  });
});
