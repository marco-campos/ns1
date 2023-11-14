export function primeIntegralDivisors() {
    // Generates a random count of prime factors between 3 and 4
    const factorCount = Math.floor(Math.random() * 2) + 3;
    let number = 1;
    let factors = [];
    let question = '';
    
    // Generates a random set of prime factors from the list [2, 3, 5, 7]
    while (factors.length < factorCount) {
        const prime = [2, 3, 5, 7][Math.floor(Math.random() * 4)];
        if (!factors.includes(prime) || factors.filter(x => x === prime).length < 2) {
            // Ensures that we do not pick the same prime more than twice
            factors.push(prime);
            number *= prime;
        }
    }
    
    // Sort the factors for better readability in the question
    factors.sort((a, b) => a - b);
    
    // Construct the question string
    question = `Find the number of prime integral divisors of ${number}.`;
    
    // The answer is the count of distinct prime factors
    const distinctFactors = [...new Set(factors)];
    const answer = distinctFactors.length;
    
    const pair = {
        question: question,
        solution: String(answer),
        explanation: `The number ${number} has the prime factors ${distinctFactors.join(', ')}.`
    };
    
    return pair;
}
export const generator3b = {
    'primeIntegralDivisors': primeIntegralDivisors
}

export const s3bSkills = [
    { value: 'primeIntegralDivisors', label: 'Number of Prime Integral Divisors' },
    
  ];
  