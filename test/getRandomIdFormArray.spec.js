import {getRandomIdFromArray} from '../src/utils/getRandomIdFromArray.js'

it('Check if IDs are unique', () => {
	const array = ['a','b','c','d','e','f']

	const result = getRandomIdFromArray(array);

	let hasDuplicate = result.some((val, i) => result.indexOf(val) !== i);

	expect(hasDuplicate).not.toBeTruthy();

})