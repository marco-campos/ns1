export function remainderBy3or9() {
    // Generate a random number length between 4 and 7
    const length = Math.floor(Math.random() * (7 - 4 + 1)) + 4;
    
    // Generate the random number with the specified length
    const number = Math.floor(Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1))) + Math.pow(10, length - 1);
    
    // Randomly choose between 3 and 9
    const divisor = Math.random() < 0.5 ? 3 : 9;
    
    // Calculate the remainder
    const remainder = number % divisor;
    
    // Create the question and answer pair
    const question = `\\text{What is the remainder when }${number} \\text{ is divided by }${divisor}?`;
    const answer = String(remainder);
    
    return {
      question: question,
      solution: answer,
    };
  }

  export function remainderBy11() {
    // Generate a random number length between 4 and 7
    const length = Math.floor(Math.random() * (7 - 4 + 1)) + 4;
    
    // Generate the random number with the specified length
    const number = Math.floor(Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1))) + Math.pow(10, length - 1);
    
    // Randomly choose between 3 and 9
    const divisor = 3;
    
    // Calculate the remainder
    const remainder = number % divisor;
    
    // Create the question and answer pair
    const question = `\\text{What is the remainder when }${number} \\text{ is divided by }${divisor}?`;
    const answer = String(remainder);
    
    return {
      question: question,
      solution: answer,
    };
  }

  export function remainderBy6or12or18() {
    // Generate a random number length between 4 and 7
    const length = Math.floor(Math.random() * (7 - 4 + 1)) + 4;
    
    // Generate the random number with the specified length
    const number = Math.floor(Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1))) + Math.pow(10, length - 1);
    
    // Randomly choose between 6, 12, and 18
    const divisors = [6, 12, 18];
    const divisor = divisors[Math.floor(Math.random() * divisors.length)];
    
    // Calculate the remainder
    const remainder = number % divisor;
    
    // Create the question and answer pair
    const question = `\\text{What is the remainder when }${number} \\text{ is divided by }${divisor}?`;
    const answer = String(remainder);
    
    return {
      question: question,
      solution: answer,
    };
  }

  export function remainderBy2or4or8() {
    // Generate a random number length between 4 and 7
    const length = Math.floor(Math.random() * (7 - 4 + 1)) + 4;
    
    // Generate the random number with the specified length
    const number = Math.floor(Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1))) + Math.pow(10, length - 1);
    
    // Randomly choose between 6, 12, and 18
    const divisors = [2, 4, 8];
    const divisor = divisors[Math.floor(Math.random() * divisors.length)];
    
    // Calculate the remainder
    const remainder = number % divisor;
    
    // Create the question and answer pair
    const question = `\\text{What is the remainder when }${number} \\text{ is divided by }${divisor}?`;
    const answer = String(remainder);
    
    return {
      question: question,
      solution: answer,
    };
  }
  
  export function complexRemainderQuestion() {
    // Generate three random integers between 2 and 40
    const num1 = Math.floor(Math.random() * 39) + 2;
    const num2 = Math.floor(Math.random() * 39) + 2;
    const num3 = Math.floor(Math.random() * 39) + 2;
    
    // Randomly decide the second operation (addition or subtraction)
    const operations = ['+', '-'];
    const operation2 = operations[Math.floor(Math.random() * operations.length)];
  
    // Generate a random divisor between 2 and 10
    const divisor = Math.floor(Math.random() * 9) + 2;
  
    // Perform the operations
    let result;
    if (operation2 === '+') {
      result = (num1 * num2) + num3;
    } else { // operation2 === '-'
      result = (num1 * num2) - num3;
    }
  
    // Calculate the remainder
    const remainder = result % divisor;
  
    // Build the expression string
    const expression = `(${num1} \\times ${num2} ${operation2} ${num3})`;
  
    // Create the question and answer pair
    const question = `${expression} \\div ${divisor} \\text{ has a remainder of: }`;
    const answer = String(remainder);
  
    return {
      question: question,
      solution: answer,
    };
  }
  

  export const generator1d = {
    'remainderBy3or9': remainderBy3or9,
    'remainderBy11': remainderBy11,
    'remainderBy6or12or18': remainderBy6or12or18,
    'remainderBy2or4or8': remainderBy2or4or8,
    'complexRemainderQuestion': complexRemainderQuestion
  }
  
  export const s1dSkills = [
    { value: 'remainderBy2or4or8', label: 'Remainders when dividing by powers of 2' },
    { value: 'remainderBy3or9', label: 'Remainders when dividing by 9' },
    { value: 'remainderBy11', label: 'Remainders when dividing by 11' },
    { value: 'remainderBy6or12or18', label: 'Remainders when dividing by 6, 12, or 18' },
    { value: 'complexRemainderQuestion', label: 'Remainders of Expressions' },
]