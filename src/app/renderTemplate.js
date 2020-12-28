const buttonTemplate = `
    <button type="button" class="btn btn--white"><i class=""></i> Hall of fame</button>
`

function render(elem) {
    const node = document.querySelector(elem.on)
    node.innerHTML = elem.html

}

export const ButtonComponent = ({ renderOn }) => {
    const element = render({ on: renderOn, html: buttonTemplate })

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