const randomElement = (array) => array[Math.floor(Math.random() * array.length)];

const getDivisibleNumbers = (number) => {
    let choices = [];
    for (let i = 1; i <= 10; i++) {
      if (i % number === 0) choices.push(i);
    }
    // Since the same number can be chosen twice, we just pick from the array twice.
    let first = randomElement(choices);
    let second = randomElement(choices);
  
    return [first, second];
  };

const getProperFractions = (number) => {
let numerators = [];
for (let i = 1; i < number; i++) {
    if (number % i !== 0) numerators.push(i);
}
return [randomElement(numerators), randomElement(numerators)];
};
  
const createLatexString = (wholeNumber, fraction, number) => {
    return `${wholeNumber} \\frac{${fraction}}{${number}}`;
  };

function mixedToImproper(whole, fracPart, denom) {
    const numerator = whole * denom + fracPart;
    return {
        numerator: numerator,
        denominator: denom,
    };
    }

function improperToMixed(numerator, denominator) {
    const wholePart = Math.floor(numerator / denominator);
    const fracPart = numerator % denominator;
    if (fracPart === 0) {
        const mixedString = `${wholePart}`
        return {
            wholePart: wholePart,
            fracPart: fracPart,
            mixedString: mixedString,
        };
    } if (wholePart === 0) {
        const mixedString = `${fracPart}/${denominator}`;
        return {
            wholePart: wholePart,
            fracPart: fracPart,
            mixedString: mixedString,
        };
    }
    
    else{
        const mixedString = `${wholePart} ${fracPart}/${denominator}`;
        return {
            wholePart: wholePart,
            fracPart: fracPart,
            mixedString: mixedString,
        };
    }
}    

export const mixedFoil1 = () => {
    const initialNumber = randomElement([3, 4, 5, 6, 7, 8]);
    const [whole1, whole2] = getDivisibleNumbers(initialNumber);
    const [fracPart1, fracPart2] = getProperFractions(initialNumber);

    const question = `${createLatexString(whole1, fracPart1, initialNumber)} \\times ${createLatexString(whole2, fracPart2, initialNumber)} \\text{(mixed number/improper fraction)}`;
    // Convert mixed numbers to improper fractions
    const improper1 = mixedToImproper(whole1, fracPart1, initialNumber);
    const improper2 = mixedToImproper(whole2, fracPart2, initialNumber);

    // Multiply the improper fractions
    const numerator = improper1.numerator * improper2.numerator;
    const denominator = improper1.denominator * improper2.denominator;

    // Convert the result back to a mixed number
    const mixedNumberResult = improperToMixed(numerator, denominator);

    // The answer array should contain the mixed number and its corresponding improper fraction
    const answer = [mixedNumberResult.mixedString, `${numerator}/${denominator}`];
    return {
        question: question,
        solution: answer,
    };
};

// Simplify a fraction
function simplifyFraction(numerator, denominator) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const greatestCommonDivisor = gcd(numerator, denominator);
    return {
        numerator: numerator / greatestCommonDivisor,
        denominator: denominator / greatestCommonDivisor
    };
    }

export const axaOverb = () => {
    // Ensure a difference of no more than 10 between a and b
    let a = Math.floor(Math.random() * 34) + 2;
    let b = a + Math.floor(Math.random() * 10) + 1; // This ensures the difference <= 10
    if (b > 35) {
        b = a - (b - 35); // Adjust if b goes beyond 35
    }

    // Create the LaTeX question string
    const question = `${a} \\times \\frac{${a}}{${b}} \\text{(mixed number/improper fraction)}`;

    // Calculate the answer as a fraction
    let numerator = a * a;
    let denominator = b;

    // Assuming we have a function to simplify fractions
    const simplified = simplifyFraction(numerator, denominator);

    // Assuming we have a function to convert an improper fraction to a mixed number
    const mixedNumberAnswer = improperToMixed(simplified.numerator, simplified.denominator).mixedString;

    const answerImproper = `${simplified.numerator}/${simplified.denominator}`;

    const solution = [mixedNumberAnswer, answerImproper];
    return {
        question: question,
        solution: solution
    };
};

export const a_bPlusb_a = () => {
    // Ensure a difference of no more than 10 between a and b
    let a = Math.floor(Math.random() * 15) + 2;
    let b = Math.floor(Math.random() * 15) + 2;; // This ensures the difference <= 10
    // Create the LaTeX question string
    const question = `\\frac{${a}}{${b}} + \\frac{${b}}{${a}}`;

    // Calculate the answer as a fraction
    let numerator = a * a + b * b;
    let denominator = a*b;

    // Assuming we have a function to simplify fractions
    const simplified = simplifyFraction(numerator, denominator);

    // Assuming we have a function to convert an improper fraction to a mixed number
    const mixedNumberAnswer = improperToMixed(simplified.numerator, simplified.denominator).mixedString;

    const answerImproper = `${simplified.numerator}/${simplified.denominator}`;

    const solution = [mixedNumberAnswer, answerImproper];


    return {
        question: question,
        solution: solution
    };
};

export const a_bMinusNfrac1 = () => {
    // Ensure a difference of no more than 10 between a and b
    let a = Math.floor(Math.random() * 15) + 2; // a is in the range of 2 to 16
    let b = Math.floor(Math.random() * (15 - a)) + a + 1; // b is in the range of a+1 to 1
    let n = Math.floor(Math.random() * 5) + 2;

    let c = n*a-1
    let d = n*b+1
    // Create the LaTeX question string
    const question = `\\frac{${a}}{${b}} - \\frac{${c}}{${d}}`;

    // Calculate the answer as a fraction
    let numerator = a+b;
    let denominator = b * (n * b + 1);

    // Assuming we have a function to simplify fractions
    const simplified = simplifyFraction(numerator, denominator);

    // Assuming we have a function to convert an improper fraction to a mixed number
    const mixedNumberAnswer = improperToMixed(simplified.numerator, simplified.denominator).mixedString;

    const answerImproper = `${simplified.numerator}/${simplified.denominator}`;

    const solution = [mixedNumberAnswer, answerImproper];


    return {
        question: question,
        solution: solution
    };
};

export const a_bMinusNfrac2 = () => {
    // Ensure a difference of no more than 10 between a and b
    let a = Math.floor(Math.random() * 15) + 2; // a is in the range of 2 to 16
    let b = Math.floor(Math.random() * (15 - a)) + a + 1; // b is in the range of a+1 to 16
    let n = Math.floor(Math.random() * 5) + 2;

    let c = n*a+1
    let d = n*b-1
    // Create the LaTeX question string
    const question = `\\frac{${a}}{${b}} - \\frac{${c}}{${d}}`;

    // Calculate the answer as a fraction
    let numerator = -a-b;
    let denominator = b * (n * b - 1);

    // Assuming we have a function to simplify fractions
    const simplified = simplifyFraction(numerator, denominator);

    // Assuming we have a function to convert an improper fraction to a mixed number
    const mixedNumberAnswer = improperToMixed(simplified.numerator, simplified.denominator).mixedString;

    const answerImproper = `${simplified.numerator}/${simplified.denominator}`;

    const solution = [mixedNumberAnswer, answerImproper];


    return {
        question: question,
        solution: solution
    };
};


export const generator1c = {
    'mixedFoil1': mixedFoil1,
    'axaOverb': axaOverb,
    'a_bPlusb_a': a_bPlusb_a,
    'a_bMinusNfrac1':a_bMinusNfrac1,
    'a_bMinusNfrac2':a_bMinusNfrac2
}

