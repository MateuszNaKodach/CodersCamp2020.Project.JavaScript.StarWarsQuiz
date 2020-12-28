export const getRandomIdFromArray = (array, length = 4) => {
	//zbior = nieuporządkowany nie ma powtórzeń, 
	const resultsArr = [];
	  for (let i = 0; i < length; i++) {
		const newNumber = Math.floor(Math.random() * array.length);
		resultsArr.includes(array[newNumber])
		  ? (length += 1)
		  : resultsArr.push(array[newNumber]);
	  }
	  return resultsArr;
}

