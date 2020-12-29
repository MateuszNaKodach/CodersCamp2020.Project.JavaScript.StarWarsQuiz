import { render, renderComponent } from '../src/app/renderTemplate';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect';

describe('Rendering element and injecting it into DOM', () => {



    it('Should add button element to the DOM', () => {
        document.body.innerHTML = `
            <div id="hall-of-fame" data-testid="test-container"></div>
        `;
        const buttonTemplate = `
        <button type="button" class="btn btn--white" data-testid="test-button"><span class="icon"></span>Hall of fame</button>
        `;

        renderComponent({ renderOn: '#hall-of-fame', htmlTemplate: buttonTemplate, position: 'beforeend'});

        expect(screen.getByTestId('test-container')).not.toBeEmptyDOMElement();
        expect(screen.getByTestId('test-container')).toContainHTML(buttonTemplate);
    })

})