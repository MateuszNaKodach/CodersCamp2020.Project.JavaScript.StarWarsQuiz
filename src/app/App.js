import {generateQuestion} from './generateQuestion.js';

export const App = ({options}) => {

	const questionPeople = generateQuestion('people')
	const questionVehicles = generateQuestion('vehicles');
	const qestionStarships = generateQuestion('starships');

	console.log(questionPeople);
	console.log(questionVehicles);
	console.log(qestionStarships);
}


