import { foil2x2, foil2x3, foil3x3, multiply11, multiply111, multiply101, multiply25, multiply75, multiplyNear100, squaresEnd5, squares4159 } from './section1a';
import { factor1a, factor1b, commonfactorpm, sumconsecutivesquares, differenceSquares} from './section1b';  
import { mixedFoil1, axaOverb } from './section1c';

export function generateQuestionsWithSolutions(numberOfQuestions) {
    let questionsWithSolutions = [];
    const generators1a = [foil2x2, foil2x3, multiply11, multiply111, multiply101, multiply25, multiply75, multiplyNear100, squaresEnd5, squares4159, foil3x3]; // Array of functions to generate questions
    const generators1b = [factor1a, factor1b, commonfactorpm, sumconsecutivesquares, differenceSquares]
    const generators1c = [mixedFoil1, axaOverb]
    const generators = [axaOverb]
    // const generators = [...generators1a, ...generators1b, ...generators1c];
    for (let i = 0; i < numberOfQuestions; i++) {
      // Randomly select a question generation function and push its output
      let generateQuestion = generators[Math.floor(Math.random() * generators.length)];

      questionsWithSolutions.push(generateQuestion());
    }
    console.log(questionsWithSolutions)

    return questionsWithSolutions;
}

export default generateQuestionsWithSolutions