import {peopleIdArray, starshipsIdArray, vehiclesIdArray} from './settings.js';
import {getRandomIdFromArray} from '../utils/getRandomIdFromArray.js';
import {fetchData} from '../utils/fetchData.js';

export const generateQuestion = (mode) => {
	let questionsIdArray = [];
	let rightAnswerId;
	const result = {
	  image: "",
	  answers: [],
	  rightAnswer: "",
	};

	switch(mode) {
		case 'people' : 
			questionsIdArray = getRandomIdFromArray(peopleIdArray);
			break;
		case 'starships' : 
			questionsIdArray =  getRandomIdFromArray(starshipsIdArray);
			break;
		
		case 'vehicles' : 
			questionsIdArray =  getRandomIdFromArray(vehiclesIdArray);
			break;
	}

	rightAnswerId =  questionsIdArray[Math.floor(Math.random() * questionsIdArray.length)];
	
	questionsIdArray.forEach((id) => {
		fetchData(mode,id)
		.then (data => {
			result.answers.push(data.name);
		  		if (rightAnswerId == id) {
				result.image = btoa(`static/assets/img/modes/${mode}/${id}.jpg`);
				result.rightAnswer = data.name;
			}
		})
	})
  
	return result;
  };