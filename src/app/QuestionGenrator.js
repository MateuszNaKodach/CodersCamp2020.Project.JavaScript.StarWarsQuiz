import {peopleIdArray, starshipsIdArray, vehiclesIdArray} from './settings.js';
import {getRandomIdFromArray} from '../utils/getRandomIdFromArray.js';
import {fetchData} from '../utils/fetchData.js';


export class QuestionGenerator {
	constructor(mode, generateRandomIdArray, fetchModeData) {
		this.mode = mode;
		this.generateRandomIdArray = generateRandomIdArray
		this.fetchModeData = fetchModeData;
	}
	
	generateQuestion() {
		let questionsIdArray = this.generateRandomIdArray();
		let rightAnswerId;
		const result = {
		  image: "",
		  answers: [],
		  rightAnswer: "",
		};
	
		rightAnswerId =  questionsIdArray[Math.floor(Math.random() * questionsIdArray.length)];
		
		questionsIdArray.forEach((id) => {
			this.fetchModeData(this.mode, id)
			.then (data => {
				result.answers.push(data.name);
					  if (rightAnswerId == id) {
					result.image = btoa(`static/assets/img/modes/${this.mode}/${id}.jpg`);
					result.rightAnswer = data.name;
				}
			})
		})
	  
		return result;
	  };
}
 

const fetchModeData = (mode, id) => fetchData(mode, id)
const peopleQuestionGenerator = new QuestionGenerator('people', () => getRandomIdFromArray(peopleIdArray), fetchModeData)
const startshipsQuestionGenerator = new QuestionGenerator('starships', () => getRandomIdFromArray(starshipsIdArray), fetchModeData)
const vehiclesQuestionGenerator = new QuestionGenerator('vehicles', ()=> getRandomIdFromArray(vehiclesIdArray), fetchModeData)
console.log(peopleQuestionGenerator.generateQuestion())
console.log(startshipsQuestionGenerator.generateQuestion())
console.log(vehiclesQuestionGenerator.generateQuestion())