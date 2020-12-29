import { isAnswerCorrect } from '../src/utils/utils.js'

describe('Check function which checks the correctness of player answers', () => {

    const correctAsnwer = 'Yoda';
    const playerCorrectAnswer = 'Yoda';
    const playerWrongAnswer = 'Darth Vader';

    it("Check if answer is correct", () => {    
        expect(isAnswerCorrect(correctAsnwer, playerCorrectAnswer)).toBeTruthy();
      })

    it("Check if answer is wrong", () => {
        expect(isAnswerCorrect(correctAsnwer, playerWrongAnswer)).not.toBeTruthy();
    })
})
