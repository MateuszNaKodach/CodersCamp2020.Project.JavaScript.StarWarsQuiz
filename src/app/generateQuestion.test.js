const fechMock = require('jest-fetch-mock');
fechMock.enableMocks();

const {generateQuestion} = require('./generateQuestion');

test('should generate question for people mode', () => {

	fetch.mockResponseOnce(JSON.stringify({
		name: "Dormé", height: "165", mass: "unknown", hair_color: "brown"
	}))

	const result = generateQuestion('people');
	console.log('rezulatt', result);
	expect(fetch).toHaveBeenCalledWith('https://swapi.dev/api/people/66/')
	expect(result).toEqual({
		answers: ['','','',''],
		image: 'c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzYuanBn',
		rightAnswer: 'Owen Lars'
	})
	
})
