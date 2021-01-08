export const SampleDivWithText = ({ text }) => {
  const element = document.createElement('div');
  element.innerText = text;
  element.className = 'sample-div-default-class';
  return element;
};
