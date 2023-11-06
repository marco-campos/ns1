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
  
export function generateQuestionsWithSolutions(numberOfQuestions) {
let questionsWithSolutions = [];
for (let i = 0; i < numberOfQuestions; i++) {
    questionsWithSolutions.push(foil2x2());
}
return questionsWithSolutions;
}

export default generateQuestionsWithSolutions