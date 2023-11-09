import { foil2x2, foil2x3, foil3x3, multiply11, multiply111, multiply101, multiply25, multiply75, multiplyNear100, squaresEnd5, squares4159 } from './section1/section1a';
import { factor1a, factor1b, commonfactorpm, sumconsecutivesquares, differenceSquares} from './section1/section1b';  
import { mixedFoil1, axaOverb } from './section1/section1c';
import { generator1a } from './section1/section1a'
import { generator1b } from './section1/section1b'


export function generateQuestionsWithSolutions(numberOfQuestions) {
  let questionsWithSolutions = [];
  const generators1a = [foil2x2, foil2x3, multiply11, multiply111, multiply101, multiply25, multiply75, multiplyNear100, squaresEnd5, squares4159, foil3x3]; // Array of functions to generate questions
  const generators1b = [factor1a, factor1b, commonfactorpm, sumconsecutivesquares, differenceSquares]
  const generators1c = [mixedFoil1, axaOverb]
  //const generators = [axaOverb]

  const generators = [...generators1a, ...generators1b, ...generators1c];
    for (let i = 0; i < numberOfQuestions; i++) {
      // Randomly select a question generation function and push its output
      let generateQuestion = generators[Math.floor(Math.random() * generators.length)];

      questionsWithSolutions.push(generateQuestion());
    }
    return questionsWithSolutions;
}

export const determineGeneratorObject = (skillToPractice) => {
  // Logic to determine which generator object to use
  // This can be as simple as a switch case or a mapping based on skillToPractice
  switch (skillToPractice) {
    case 'section1a':
      return generator1a;
    case 'section1b':
      return generator1b;
    // ... other cases for other sections
    default:
      return {}; // Default or throw an error if not found
  }
};

export default generateQuestionsWithSolutions