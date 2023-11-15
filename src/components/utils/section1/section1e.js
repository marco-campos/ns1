function gcd(a, b) {
    // Compute the greatest common divisor of a and b
    while (b !== 0) {
      let t = b;
      b = a % b;
      a = t;
    }
    return a;
  }
  
  function lcm(a, b) {
    // Compute the lowest common multiple of a and b
    return Math.abs(a * b) / gcd(a, b);
  }
  
  function gcdQuestion() {
    const base = Math.floor(Math.random() * 9) + 2; // Choose a base between 2 and 10
    let num1 = base * (Math.floor(Math.random() * 8) + 2);
    let num2 = base * (Math.floor(Math.random() * 8) + 2);
  
    // Ensure num1 and num2 are not equal
    while (num1 === num2) {
      num2 = base * (Math.floor(Math.random() * 8) + 2);
    }
  
    const answer = gcd(num1, num2);
  
    return {
      question: `\\text{The GCD of }${num1} \\text{ and } ${num2} \\text{ is: }`,
      solution: answer.toString(),
    };
  }
  
  function lcmQuestion() {
    let num1 = Math.floor(Math.random() * 29) + 2; // Number between 2 and 30
    let num2 = Math.floor(Math.random() * 29) + 2; // Number between 2 and 30
  
    // Avoiding multiples
    while (num1 % num2 === 0 || num2 % num1 === 0) {
      num1 = Math.floor(Math.random() * 29) + 2;
      num2 = Math.floor(Math.random() * 29) + 2;
    }
  
    const answer = lcm(num1, num2);
  
    return {
      question: `\\text{The LCM of } ${num1} \\text{ and } ${num2} \\text{ is: }`,
      solution: answer.toString(),
    };
  }

export const generator1e = {
    'gcdQuestion': gcdQuestion,
    'lcmQuestion': lcmQuestion,

}
  
  export const s1eSkills = [
    { value: 'gcdQuestion', label: 'Finding Greatest Common Divisors' },
    { value: 'lcmQuestion', label: 'Finding Least Common Multiples' },
]
  