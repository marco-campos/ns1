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
    const mixedString = `${wholePart} ${fracPart}/${denominator}`;
    return {
        wholePart: wholePart,
        fracPart: fracPart,
        mixedString: mixedString,
    };
    }
    

export const mixedFoil1 = () => {
    const initialNumber = randomElement([3, 4, 5, 6, 7, 8]);
    const [whole1, whole2] = getDivisibleNumbers(initialNumber);
    const [fracPart1, fracPart2] = getProperFractions(initialNumber);

    const question = `${createLatexString(whole1, fracPart1, initialNumber)} \\times ${createLatexString(whole2, fracPart2, initialNumber)}`;
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

