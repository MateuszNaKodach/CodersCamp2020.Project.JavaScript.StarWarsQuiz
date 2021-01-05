const { QuestionGenerator } = require('../src/app/QuestionGenrator');

it('should generate correct data', async () => {
  //Given generated answers ids: [1, 3, 13, 22]
  const questionsIdArray = [1, 3, 13, 22];
  //And right answer is 1
  const rightAnswerId = 1;

  //And fetchData return response1 for id 1 etc.
  const fetchData = (mode, id) => {
    if (id === 1) {
      return Promise.resolve(response1);
    } else if (id === 3) {
      return Promise.resolve(response3);
    } else if (id === 13) {
      return Promise.resolve(response13);
    } else if (id === 22) {
      return Promise.resolve(response22);
    }
  };

  const peopleQuestionGenerator = new QuestionGenerator(
    'people',
    () => questionsIdArray,
    fetchData,
    () => rightAnswerId,
  );

  const generatedQuestion = peopleQuestionGenerator.generateQuestion();
  await expect(generatedQuestion).resolves.toEqual({
    answers: ['Luke Skywalker', 'R2-D2', 'Chewbacca', 'Boba Fett'],
    image: 'c3RhdGljL2Fzc2V0cy9pbWcvbW9kZXMvcGVvcGxlLzEuanBn',
    rightAnswer: 'Luke Skywalker',
  });
});

const response1 = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'http://swapi.dev/api/planets/1/',
  films: [
    'http://swapi.dev/api/films/1/',
    'http://swapi.dev/api/films/2/',
    'http://swapi.dev/api/films/3/',
    'http://swapi.dev/api/films/6/',
  ],
  species: [],
  vehicles: ['http://swapi.dev/api/vehicles/14/', 'http://swapi.dev/api/vehicles/30/'],
  starships: ['http://swapi.dev/api/starships/12/', 'http://swapi.dev/api/starships/22/'],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'http://swapi.dev/api/people/1/',
};

const response3 = {
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a',
  homeworld: 'http://swapi.dev/api/planets/8/',
  films: [
    'http://swapi.dev/api/films/1/',
    'http://swapi.dev/api/films/2/',
    'http://swapi.dev/api/films/3/',
    'http://swapi.dev/api/films/4/',
    'http://swapi.dev/api/films/5/',
    'http://swapi.dev/api/films/6/',
  ],
  species: ['http://swapi.dev/api/species/2/'],
  vehicles: [],
  starships: [],
  created: '2014-12-10T15:11:50.376000Z',
  edited: '2014-12-20T21:17:50.311000Z',
  url: 'http://swapi.dev/api/people/3/',
};

const response13 = {
  name: 'Chewbacca',
  height: '228',
  mass: '112',
  hair_color: 'brown',
  skin_color: 'unknown',
  eye_color: 'blue',
  birth_year: '200BBY',
  gender: 'male',
  homeworld: 'http://swapi.dev/api/planets/14/',
  films: [
    'http://swapi.dev/api/films/1/',
    'http://swapi.dev/api/films/2/',
    'http://swapi.dev/api/films/3/',
    'http://swapi.dev/api/films/6/',
  ],
  species: ['http://swapi.dev/api/species/3/'],
  vehicles: ['http://swapi.dev/api/vehicles/19/'],
  starships: ['http://swapi.dev/api/starships/10/', 'http://swapi.dev/api/starships/22/'],
  created: '2014-12-10T16:42:45.066000Z',
  edited: '2014-12-20T21:17:50.332000Z',
  url: 'http://swapi.dev/api/people/13/',
};

const response22 = {
  name: 'Boba Fett',
  height: '183',
  mass: '78.2',
  hair_color: 'black',
  skin_color: 'fair',
  eye_color: 'brown',
  birth_year: '31.5BBY',
  gender: 'male',
  homeworld: 'http://swapi.dev/api/planets/10/',
  films: ['http://swapi.dev/api/films/2/', 'http://swapi.dev/api/films/3/', 'http://swapi.dev/api/films/5/'],
  species: [],
  vehicles: [],
  starships: ['http://swapi.dev/api/starships/21/'],
  created: '2014-12-15T12:49:32.457000Z',
  edited: '2014-12-20T21:17:50.349000Z',
  url: 'http://swapi.dev/api/people/22/',
};
