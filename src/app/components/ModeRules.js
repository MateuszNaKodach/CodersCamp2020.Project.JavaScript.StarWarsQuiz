export const ModeRules = (text = 'This mode probably has some rules...') => {
  const modeRulesObj = document.createElement('div');
  modeRulesObj.classList.add('modeRules');

  const headerContainer = document.createElement('div');
  headerContainer.classList.add('modeRules__headerContainer');

  const rulesIcon = document.createElement('span');
  rulesIcon.classList.add('modeRules__icon');
  headerContainer.appendChild(rulesIcon);

  const rulesHeader = document.createElement('h2');
  rulesHeader.classList.add('modeRules__header');
  rulesHeader.innerText = 'Mode Rules';
  headerContainer.appendChild(rulesHeader);

  modeRulesObj.appendChild(headerContainer);

  const rulesText = document.createElement('p');
  rulesText.classList.add('modeRules__text');
  rulesText.innerText = text;

  modeRulesObj.appendChild(rulesText);

  return modeRulesObj;
};
