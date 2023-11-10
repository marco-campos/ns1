export function squares() {
    const number = Math.floor(Math.random() * (49)) + 2;
    const question = `${number}^2 = `;
    const answer = String(number*number);
    
    return {
      question: question,
      solution: answer,
    };
  }

export function squareRoot() {
const number = Math.floor(Math.random() * (49)) + 2;
const question = `\\sqrt{${number * number}} = `;
const answer = String(number);

return {
    question: question,
    solution: answer,
};
}

export function cubes() {
const number = Math.floor(Math.random() * (20)) + 4;
const question = `${number}^3 = `;
const answer = String(number*number*number);

return {
    question: question,
    solution: answer,
};
}

export function cubeRoot() {
    const number = Math.floor(Math.random() * (20)) + 4;
    const question = `\\sqrt[3]{${number*number*number}} = `;
    const answer = String(number);
    
    return {
        question: question,
        solution: answer,
    };
    }

export const generator2a = {
    'squares': squares,
    'squareRoot': squareRoot,
    'cubes': cubes,
    'cubeRoot': cubeRoot,
    }
      