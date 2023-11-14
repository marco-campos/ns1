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

export function numOfIntegralDivisors() {
    const primes = [2, 3, 5, 7, 11];
    const primeFactors = [];
    const exponents = [];
    const numPrimes = Math.floor(Math.random() * 2) + 3; // 2 or 3 prime factors

    for (let i = 0; i < numPrimes; i++) {
        let prime = primes[Math.floor(Math.random() * primes.length)];
        while (primeFactors.includes(prime)){
            prime = primes[Math.floor(Math.random() * primes.length)]
        }
        const exponent = Math.floor(Math.random() * 5) + 1; // exponent between 1 and 5
        primeFactors.push(prime);
        exponents.push(exponent);
    }

    let number 
    if (numPrimes === 3){
        number = `${primeFactors[0]}^${exponents[0]} \\times ${primeFactors[1]}^${exponents[1]}  \\times ${primeFactors[2]}^${exponents[2]}`
    } else{
        number = `${primeFactors[0]}^${exponents[0]} \\times ${primeFactors[1]}^${exponents[1]}  \\times ${primeFactors[2]}^${exponents[2]} \\times ${primeFactors[3]}^${exponents[3]}`
    }
    const question = `\\text{ Find the number of integral divisors of }${number}.`;
    const answer = String(exponents.reduce((acc, e) => acc * (e + 1), 1));
    const pair = {
        question: question,
        solution: answer,
    };

    return pair;
}

export function sumOfIntegralDivisors() {
    const primes = [2, 3, 5];
    const primeFactors = [];
    const exponents = [];
    const numPrimes = 2; // 2 or 3 prime factors

    for (let i = 0; i < numPrimes; i++) {
        let prime = primes[Math.floor(Math.random() * primes.length)];
        while (primeFactors.includes(prime)){
            prime = primes[Math.floor(Math.random() * primes.length)]
        }
        const exponent = Math.floor(Math.random() * 2) + 1; // exponent between 1 and 5
        primeFactors.push(prime);
        exponents.push(exponent);
    }

    let sum = 1; // Start with 1 because we'll be multiplying terms.
    console.log(primeFactors, exponents)
    for (let i = 0; i < primeFactors.length; i++) {
        // Calculate each term of the product using the formula
        let term = (Math.pow(primeFactors[i], exponents[i] + 1) - 1) / (primes[i] - 1);
        sum *= term;
    }
    const number = primeFactors.reduce((acc, prime, idx) => acc * Math.pow(prime, exponents[idx]), 1);

    const question = `\\text{Find the sum of integral divisors of }${number}.`;
    const answer = String(sum);
    const pair = {
        question: question,
        solution: answer,
    };

    return pair;
}




export const generator3b = {
    'primeIntegralDivisors': primeIntegralDivisors,
    'numOfIntegralDivisors':numOfIntegralDivisors,
    //'sumOfIntegralDivisors':sumOfIntegralDivisors
}

export const s3bSkills = [
    { value: 'primeIntegralDivisors', label: 'Number of Prime Integral Divisors' },
    { value: 'numOfIntegralDivisors', label: 'Number of Integral Divisors' },
    //{ value: 'sumOfIntegralDivisors', label: 'Sum of Integral Divisors' },
  ];
  