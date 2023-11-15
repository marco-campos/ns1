import { generator1a } from './section1/section1a'
import { generator1b } from './section1/section1b'
import { generator1c } from './section1/section1c'
import { generator1d } from './section1/section1d'
import { generator1e } from './section1/section1e'
import { generator2a } from './section2/section2a'
import { generator2b } from './section2/section2b'
import { generator2c } from './section2/section2c'
import { generator3a } from './section3/section3a';
import { generator3b } from './section3/section3b';
import { generator3c } from './section3/section3c';
import { generator3d } from './section3/section3d';
import { generator4a } from './section4/section4a';


export function generateQuestionsWithSolutions(numberOfQuestions) {
  let questionsWithSolutions = [];

  const generators1a =Object.values(generator1a)
  const generators1b =Object.values(generator1b)
  const generators1c =Object.values(generator1c)
  const generators1d =Object.values(generator1d)
  const generators1e =Object.values(generator1e)

  const generators2a =Object.values(generator2a)
  const generators2b =Object.values(generator2b)
  const generators2c =Object.values(generator2c)

  const generators3a =Object.values(generator3a)
  const generators3b =Object.values(generator3b)
  const generators3c =Object.values(generator3c)
  const generators3d =Object.values(generator3d)

  const generators4a =Object.values(generator4a)
  
  //const generators = [axaOverb]

  const generators1 = [...generators1a, ...generators1b, ...generators1c, ...generators1d, ...generators1e];
  const generators2 = [...generators2a, ...generators2b, ...generators2c]
  const generators3 = [...generators3a, ...generators3b, ...generators3c, ...generators3d]
  const generators4 = [...generators4a]

  const generators = [...generators1, ...generators2, ...generators3, ...generators4]
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
    case 'section1e':
      return generator1e;
    case 'section2a':
      return generator2a;
    case 'section2b':
      return generator2b
    case 'section2c':
      return generator2c
    case 'section3a':
      return generator3a
    case 'section3b':
      return generator3b
    case 'section3c':
      return generator3c
    case 'section3d':
      return generator3d
    case 'section4a':
      return generator4a
    // ... other cases for other sections
    
    default:
      return {}; // Default or throw an error if not found
  }
};

export default generateQuestionsWithSolutions