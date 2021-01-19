export const GameMode = (text = 'Who is this character?') => {
  const component = document.createElement('div');
  component.className = 'gameMode';
  component.textContent = `MODE: ${text}`;

  return component;
};
