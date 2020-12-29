import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect';
import {showImage} from '../src/app/showImage';

test('should add imageWrapper element to DOM and have swquiz-app-image calss', () => {

document.body.innerHTML = `
<div id="swquiz-app">
</div>
`

showImage('c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzQuanBn');

const convertFromBas64 = atob('c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzQuanBn');

expect(screen.getByTestId('imageWrapper')).toBeEmptyDOMElement()
expect(screen.getByTestId('imageWrapper')).toHaveClass('swquiz-app-image')
expect(screen.getByTestId('imageWrapper')).toHaveStyle(`
  background-image: url('${convertFromBas64}');
`)
expect(screen.getByTestId('imageWrapper')).toBeInstanceOf(HTMLElement)
})