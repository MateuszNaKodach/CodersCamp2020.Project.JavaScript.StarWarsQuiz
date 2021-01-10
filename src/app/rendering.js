export function render({ component, inside, withClasses }) {
  if (!component || !inside) {
    throw new Error(
      `You have to define which component and inside what should be rendered! Passed arguments: ${JSON.stringify(
        { component, inside, withClasses },
      )}`,
    );
  }
  const componentToRender = withClassList(component, withClasses);
  inside.appendChild(componentToRender);
  return componentToRender;
}

function withClassList(component, classList) {
  if (classList) component.classList.add(classList);
  return component;
}
