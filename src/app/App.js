import { QuestionGenerator } from './QuestionGenrator.js'

export const App = ({options}) => {
	const newQuestion = new QuestionGenerator('people')

	const result = newQuestion.generateQuestion();

	console.log(result)
}


