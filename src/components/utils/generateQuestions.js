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
    console.log(pair)
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
  

  
export function generateQuestionsWithSolutions(numberOfQuestions) {
    let questionsWithSolutions = [];
    const generators = [foil2x2, foil2x3]; // Array of functions to generate questions
  
    for (let i = 0; i < numberOfQuestions; i++) {
      // Randomly select a question generation function and push its output
      const generateQuestion = generators[Math.floor(Math.random() * generators.length)];
      questionsWithSolutions.push(generateQuestion());
    }

    return questionsWithSolutions;
}

export default generateQuestionsWithSolutions