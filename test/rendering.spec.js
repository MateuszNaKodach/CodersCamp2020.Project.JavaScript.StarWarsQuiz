import { render } from '../src/app/rendering';
import { SampleDivWithText } from './testFixtures';
import '@testing-library/jest-dom';

describe('Render component (DOM element) inside another', () => {
  it('when do not define render properties, then should throw error', () => {
    expect(() => render({})).toThrowError(
      'You have to define which component and inside what should be rendered! Passed arguments: {}',
    );
  });

  it('when do not define component to render, then should throw error', () => {
    expect(() =>
      render({
        inside: aParent,
        withClasses: 'sample-class',
      }),
    ).toThrowError(
      'You have to define which component and inside what should be rendered! Passed arguments: {"inside":{"innerText":"Parent"},"withClasses":"sample-class"}',
    );
  });

  it('when do not define inside what to render, then should throw error', () => {
    expect(() =>
      render({
        component: aComponent,
        withClasses: 'sample-class',
      }),
    ).toThrowError(
      'You have to define which component and inside what should be rendered! Passed arguments: {"component":{"innerText":"Component to render inside Parent"},"withClasses":"sample-class"}',
    );
  });

  it('when define component and inside what to render, then rendered component should be a child of "inside"', () => {
    const renderedComponent = render({
      component: aComponent,
      inside: aParent,
    });

    expect(aParent).toContainElement(renderedComponent);
    expect(renderedComponent).toHaveClass('sample-div-default-class');
    expect(renderedComponent).toBe(aComponent);
  });

  it('when define component without classes, then rendered component should have only classes assigned before', () => {
    const renderedComp = render({
      component: aComponent,
      inside: aParent,
    });

    expect(aParent).toContainElement(renderedComp);
    expect(renderedComp).toHaveClass('sample-div-default-class', {
      exact: true,
    });
  });

  it('when define component with classes and inside what to render, then rendered component should be a child of "inside" and have additional classes + those assigned before', () => {
    const renderedComponent = render({
      component: aComponent,
      inside: aParent,
      withClasses: 'with-class',
    });

    expect(aParent).toContainElement(renderedComponent);
    expect(renderedComponent).toHaveClass('sample-div-default-class');
    expect(renderedComponent).toHaveClass('with-class');
    expect(renderedComponent).toBe(aComponent);
  });
});

const aComponent = SampleDivWithText({
  text: 'Component to render inside Parent',
});
const aParent = SampleDivWithText({ text: 'Parent' });
