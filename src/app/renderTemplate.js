const buttonTemplate = `
    <button type="button" class="btn btn--white"><span class="icon"></span>Hall of fame</button>
`;

export const renderComponent = ({ renderOn }) => {
    const element = render({ on: renderOn, html: buttonTemplate});
    return {
        ...element,
        show() {
            element.style.display = "flex"
        },
        hide() {
            element.style.display = "none"
        }
    }
}

export function render(elem) {
    const targetNode = document.querySelector(elem.on);
    console.log(targetNode);
    const parent = targetNode.parentNode;
    console.log(newNode);
    try {
        targetNode.parentNode.replaceChild(newNode, targetNode)
        // node.innerHTML = elem.html;
        // node.insertAdjacentHTML(elem.pos, elem.html);
        // return node.querySelector('#white-button');
    } catch (error) {
        error = new Error('Nie znaleziono wskazanego elementu.');
        console.log(error);
    }
}
