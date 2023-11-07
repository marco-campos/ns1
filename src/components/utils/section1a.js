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

  export function foil3x3() {
    // Generate a two-digit and a three-digit number
    const num1 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
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

export function multiplyNear100() {
    // Generate a deviation for the first number between -11 and 11, inclusive
    const deviation1 = Math.floor(Math.random() * 21) - 10; // deviation range from -11 to +11
    // Ensure the second deviation is the opposite to keep the total distance within 11
    const deviation2 = -deviation1;
  
    // Calculate the numbers based on their deviations from 100
    const num1 = 100 + deviation1;
    const num2 = 100 + deviation2;
  
    const question = `${num1} \\times ${num2}`;
    const answer = String(num1 * num2);
  
    return {
      question: question,
      solution: answer,
    };
  }

  export function squaresEnd5() {
    const num = Math.floor(Math.random() * 19) + 1;

    // Build the number ending in 5
    const numberEndingInFive = num * 10 + 5;

    // Calculate the square by using the pattern for squaring numbers ending in 5:
    // (a * 10 + 5)^2 = a * (a + 1) followed by 25
    // const productOfNumAndNumPlusOne = num * (num + 1);
    const result = Math.pow(numberEndingInFive, 2);

  const question = `(${num}5)^2`;
  const answer = String(result);

    return {
        question: question,
        solution: answer,
    };
}

export function squares4159() {
    // Generate a random number between 41 and 59
    const num = Math.floor(Math.random() * (59 - 41 + 1)) + 41;
  
    // Calculate the square of the number
    const result = num * num;
  
    // Construct the LaTeX question string
    const question = `(${num})^2`;
  
    // The answer is the square of the num
    const answer = result.toString();
  
    return {
      question: question,
      solution: answer,
    };
  }
