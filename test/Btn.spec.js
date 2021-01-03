import { Btn } from '../src/app/components/Btn';
import '@testing-library/jest-dom';

describe('Function that creates and renders button', () => {

    it('Should create and return button object with passed parameters.', () => {
        const testButton = Btn({id: 'test-id', btnText: 'Test', class: [], onClickFn: undefined, icon: ''});

        expect(testButton).not.toBeNull();
        expect(testButton.id).toBe('test-id');
        expect(testButton.innerText).toBe('Test');
        expect(testButton).toHaveClass('btn');
        expect(testButton.onClickFn).toBe(undefined);
        expect(testButton.icon).toBe(undefined);
        expect(testButton.innerHTML).toBeNull;
    });

    it('Should create and return button with span element in it.', () => {
        const testButton = Btn({id: 'test-id', btnText: 'Test', class: [], onClickFn: undefined, icon: 'fame'});

        expect(testButton).not.toBeNull();
        expect(testButton.id).toBe('test-id');
        expect(testButton.innerText).toBe('Test');
        expect(testButton).toHaveClass('btn');
        expect(testButton.onClickFn).toBe(undefined);
        expect(testButton).toContainHTML('<span class="icon icon--fame"></span>');
    });
})
