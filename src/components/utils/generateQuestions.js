// Assuming this code is in a file named 'questionGenerator.js'

export function foil2x2() {
    const num1 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    const num2 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    const question = `${num1} \\times ${num2}`;
    const answer = String(num1 * num2);
    const pair = {
      question: question,
      solution: answer,
    };
    return pair
}

  export function foil2x3() {
    // Generate a two-digit and a three-digit number
    const num1 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    const num2 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  
    // Randomly decide the order
    const left = Math.random() < 0.5 ? num1 : num2;
    const right = left === num1 ? num2 : num1;
  
    const question = `${left} \\times ${right}`;
    const answer = String(left * right);
  
    return {
      question: question,
      solution: answer,
    };
  }

  export function multiply11() {
    // Generate a two-digit and a three-digit number
    const num1 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    const num2 = 11
  
    // Randomly decide the order
    const left = Math.random() < 0.5 ? num1 : num2;
    const right = left === num1 ? num2 : num1;
  
    const question = `${left} \\times ${right}`;
    const answer = String(left * right);
  
    return {
      question: question,
      solution: answer,
    };
  }

  export function multiply111() {
    // Generate a two-digit and a three-digit number
    const num1 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    const num2 = 111
  
    // Randomly decide the order
    const left = Math.random() < 0.5 ? num1 : num2;
    const right = left === num1 ? num2 : num1;
  
    const question = `${left} \\times ${right}`;
    const answer = String(left * right);
  
    return {
      question: question,
      solution: answer,
    };
  }

  export function multiply101() {
    // Randomly choose between generating a 3-digit or 4-digit number
    const isThreeDigit = Math.random() < 0.5;
    const min = isThreeDigit ? 100 : 1000;
    const max = isThreeDigit ? 999 : 9999;

    // Generate the random number in the selected range
    const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const num2 = 101;
  
    // Randomly decide the order
    const left = Math.random() < 0.5 ? num1 : num2;
    const right = left === num1 ? num2 : num1;
  
    const question = `${left} \\times ${right}`;
    const answer = String(left * right);
  
    return {
      question: question,
      solution: answer,
    };
}

export function multiply25() {
    // Randomly choose between generating a 2-digit or 3-digit number
    const isTwoDigit = Math.random() < 0.5;
    const min = isTwoDigit ? 10 : 100;
    const max = isTwoDigit ? 99 : 999;

    // Generate the random number in the selected range
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    const multiplier = 25;
  
    // Construct the question and calculate the answer
    const question = `${num} \\times ${multiplier}`;
    const answer = String(num * multiplier);
  
    return {
      question: question,
      solution: answer,
    };
}

export function multiply75() {
    // Randomly choose between generating a 2-digit or 3-digit number
    const isTwoDigit = Math.random() < 0.5;
    const min = isTwoDigit ? 10 : 100;
    const max = isTwoDigit ? 99 : 999;

    // Generate the random number in the selected range
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    const multiplier = 25;
  
    // Construct the question and calculate the answer
    const question = `${num} \\times ${multiplier}`;
    const answer = String(num * multiplier);
  
    return {
      question: question,
      solution: answer,
    };
}

   

  
export function generateQuestionsWithSolutions(numberOfQuestions) {
    let questionsWithSolutions = [];
    const generators = [foil2x2, foil2x3, multiply11, multiply111, multiply101, multiply25, multiply75]; // Array of functions to generate questions
    console.log(numberOfQuestions)
    for (let i = 0; i < numberOfQuestions; i++) {
        console.log(i)
      // Randomly select a question generation function and push its output
      let generateQuestion = generators[Math.floor(Math.random() * generators.length)];

      questionsWithSolutions.push(generateQuestion());
    }
    console.log(questionsWithSolutions)

    return questionsWithSolutions;
}

export default generateQuestionsWithSolutions