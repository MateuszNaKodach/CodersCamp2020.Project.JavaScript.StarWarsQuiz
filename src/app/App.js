import { render, renderComponent } from './renderTemplate';

export const App = ({ options }) => {

    renderComponent({renderOn: '#hall-of-fame'});

    // const buttonTemplate = `
    // <button id="white-button" type="button" class="btn btn--white"><span class="icon"></span>Hall of fame</button>
    // `;

    // renderComponent({ renderOn: '#swquiz-app', htmlTemplate: buttonTemplate, position: 'beforeend'});
    // renderComponent({ renderOn: '#swquiz-app', htmlTemplate: buttonTemplate, position: 'beforeend'});

    // const comp = renderComponent({ renderOn: '#swquiz-app', htmlTemplate: buttonTemplate, position: 'beforeend'});
    // comp.hide();
    // console.log(comp);
}