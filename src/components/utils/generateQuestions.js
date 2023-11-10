import { foil2x2, foil2x3, foil3x3, multiply11, multiply111, multiply101, multiply25, multiply75, multiplyNear100, squaresEnd5, squares4159 } from './section1/section1a';
import { factor1a, factor1b, commonfactorpm, sumconsecutivesquares, differenceSquares} from './section1/section1b';  
import { mixedFoil1, axaOverb, a_bPlusb_a, a_bMinusNfrac1, a_bMinusNfrac2} from './section1/section1c';
import { remainderBy11, remainderBy3or9, remainderBy6or12or18, remainderBy2or4or8, complexRemainderQuestion } from './section1/section1d';
import { squares, squareRoot, cubes, cubeRoot} from './section2/section2a'
import {squaresdecimal, squaresPercentage, romanNumeral} from './section2/section2b'
import {firstmInts,firstmOdds, firstmEvens,firstmSquares,firstmCubes,arithmeticSeries,infGeoSeries} from './section2/section2c'
// Move these up later.
import { generator1a } from './section1/section1a'
import { generator1b } from './section1/section1b'
import { generator1c } from './section1/section1c'
import { generator1d } from './section1/section1d'
import { generator2a } from './section2/section2a'
import { generator2b } from './section2/section2b'
import { generator2c } from './section2/section2c'


export function generateQuestionsWithSolutions(numberOfQuestions) {
  let questionsWithSolutions = [];
  const generators1a = [foil2x2, foil2x3, multiply11, multiply111, multiply101, multiply25, multiply75, multiplyNear100, squaresEnd5, squares4159, foil3x3]; // Array of functions to generate questions
  const generators1b = [factor1a, factor1b, commonfactorpm, sumconsecutivesquares, differenceSquares]
  const generators1c = [mixedFoil1, axaOverb, a_bPlusb_a, a_bMinusNfrac1, a_bMinusNfrac2]
  const generators1d = [remainderBy3or9, remainderBy11, remainderBy6or12or18, remainderBy2or4or8, complexRemainderQuestion]
  
  const generators2a = [squares, squareRoot, cubes, cubeRoot]
  const generators2b = [squaresdecimal, squaresPercentage, romanNumeral]
  const generators2c = [firstmInts,firstmOdds, firstmEvens,firstmSquares,firstmCubes,arithmeticSeries,infGeoSeries]
  
  //const generators = [axaOverb]

  const generators1 = [...generators1a, ...generators1b, ...generators1c, ...generators1d];
  const generators2 = [...generators2a, ...generators2b, ...generators2c]
  const generators = [...generators1, ...generators2]
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
    case 'section1c':
      return generator1c;
    case 'section1d':
      return generator1d
    case 'section2a':
      return generator2a;
    case 'section2b':
      return generator2b
    case 'section2c':
      return generator2c
    // ... other cases for other sections
    
    default:
      return {}; // Default or throw an error if not found
  }
};

export default generateQuestionsWithSolutions