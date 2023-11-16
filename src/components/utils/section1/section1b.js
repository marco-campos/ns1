export function factor1a() {
    // Generate a random integer 'a' less than 20
    const a = Math.floor(Math.random() * 20);
  
    // Generate a random integer 'b' between 1 and 3
    const b = Math.floor(Math.random() * 2) + 2;
  
    // Calculate num1 and num2
    const num1 = a * b;
    const num2 = a;
  
    // Formulate the LaTeX question string
    const question = `${num1}^2 + ${num2}^2`;
  
    // Calculate the solution
    const solution = String(num1 * num1 + num2 * num2);
  
    // Create a pair object with the question and solution
    const pair = {
      question: question, // LaTeX wrapped in $$ for display
      solution: solution,
    };
  
    return pair;
  }

  export function factor1b() {
    // Generate a random integer 'a' less than 20
    const a = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
  
    // Formulate the LaTeX question string
    const question = `${a}^2 + ${a}`;
  
    // Calculate the solution
    const solution = String(a * a + a);
  
    // Create a pair object with the question and solution
    const pair = {
      question: question, // LaTeX wrapped in $$ for display
      solution: solution,
    };
  
    return pair;
  }

  export function commonfactorpm() {
    // Generate three random two-digit numbers
    const num1 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    const num2 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    const num3 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
  
    // Randomly choose between addition and subtraction
    const operations = ['+', '-'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
  
    // Formulate the question string
    const question = `${num3} \\times ${num1} ${operation} ${num1} \\times ${num2}`;
  
    // Calculate the solution based on the operation
    let solution;
    if (operation === '+') {
      solution = String(num3 * num1 + num1 * num2);
    } else {
      solution = String(num3 * num1 - num1 * num2);
    }
  
    // Create a pair object with the question and solution
    const pair = {
      question: question,
      solution: solution,
    };
  
    return pair;
  }


  export function sumconsecutivesquares() {
    // Generate a random integer 'a' less than 20
    const a = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    const b = a+1
  
    // Formulate the LaTeX question string
    const question = `${a}^2 + ${b}^2`;
  
    // Calculate the solution
    const solution = String(a * a + b * b);
  
    // Create a pair object with the question and solution
    const pair = {
      question: question, // LaTeX wrapped in $$ for display
      solution: solution,
    };
  
    return pair;
  }

  export function differenceSquares() {
    // Generate a random integer 'a' less than 20
    const a = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
    const b = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
  
    // Formulate the LaTeX question string
    const question = `${a}^2 - ${b}^2`;
  
    // Calculate the solution
    const solution = String(a * a - b * b);
  
    // Create a pair object with the question and solution
    const pair = {
      question: question, // LaTeX wrapped in $$ for display
      solution: solution,
    };
  
    return pair;
  }  

  export const generator1b = {
    'factor1a': factor1a,
    'factor1b': factor1b,
    'commonfactorpm': commonfactorpm,
    'sumconsecutivesquares': sumconsecutivesquares,
    'differenceSquares': differenceSquares
  }
  
  export const s1bSkills = [
    { value: 'factor1a', label: '(na)^2 + a' },
    { value: 'factor1b', label: 'a^2 + a' },
    { value: 'commonfactorpm', label: '\\text{Common Factor RPM}' },
    { value: 'sumconsecutivesquares', label: '\\text{Sum of Consecutive Squares}' },
    { value: 'differenceSquares', label: '\\text{Difference of Squares}' },
]
  

  

  