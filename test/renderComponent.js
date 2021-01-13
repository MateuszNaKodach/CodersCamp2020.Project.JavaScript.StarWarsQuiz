export function renderComponent(component) {
  document.body.innerHTML = `<div id="component-parent"></div>`;
  const parent = document.querySelector('#component-parent');
  parent.appendChild(component);
  return component;
}
