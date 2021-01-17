export const SampleDivWithText = ({ text }) => {
  const element = document.createElement('div');
  element.innerText = text;
  element.className = 'sample-div-default-class';
  return element;
};

export const withTestId = ({ component, testId }) => {
  component.setAttribute('data-testid', testId);
  return component;
};
