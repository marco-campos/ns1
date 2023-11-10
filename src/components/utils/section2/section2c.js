export function firstmInts() {
    const m = Math.floor(Math.random() * (10)) + 15;
    const sum = m * (m+1) / 2
    const question = `1 + 2 + 3 + ... + ${m} = `;
    const answer = String(sum);
    
    return {
      question: question,
      solution: answer,
    };
  }

  export function firstmOdds() {
    const m = Math.floor(Math.random() * (10)) + 15;
    const sumRoot = ((2*m-1)+1)/2
    const question = `1 + 3 + 5 + ... + ${2*m-1} = `;
    const answer = String(sumRoot*sumRoot);
    
    return {
      question: question,
      solution: answer,
    };
  }

export function firstmEvens() {
const m = Math.floor(Math.random() * (10)) + 15;
const sum = m * (m+1)
const question = `2 + 4 + 6 + ... + ${2*m} = `;
const answer = String(sum);

return {
    question: question,
    solution: answer,
};
}

export function firstmSquares() {
    const m = Math.floor(Math.random() * (4)) +7;
    const sum = m * (m+1) * (2*m+1)/6
    const question = `1 + 4 + 9 + ... + ${m*m} = `;
    const answer = String(sum);
    
    return {
        question: question,
        solution: answer,
    };
    }

export function firstmCubes() {
    const m = Math.floor(Math.random() * (4)) +7;
    const sumRoot = m * (m+1)/2
    const question = `1 + 8 + 27 + ... + ${m*m*m} = `;
    const answer = String(sumRoot * sumRoot);
    
    return {
        question: question,
        solution: answer,
    };
}

export function arithmeticSeries() {
    const a1 = Math.floor(Math.random() * 5) +1;
    const d = Math.floor(Math.random() * 3) + 1
    const m = Math.floor(Math.random() * 6) + 6
    const am = a1 + (m-1)*d
    const sum = (a1 + am) *m/2
    const a2 = a1 + d
    const a3 = a2 + d

    const question = `${a1} + ${a2} + ${a3} + ... + ${am} = `;
    const answer = String(sum);
    
    return {
        question: question,
        solution: answer,
    };
}
// Simplify a fraction
function simplifyFraction(numerator, denominator) {
    if (numerator === denominator) {
        return {
            numerator: 1,
            denominator: 1
        } }else if (numerator === -1 * denominator){
            return {
                numerator: -1,
                denominator: 1
            }    
        } else{
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const greatestCommonDivisor = gcd(numerator, denominator);
    return {
        numerator: numerator / greatestCommonDivisor,
        denominator: denominator / greatestCommonDivisor
    };}
}

export function infGeoSeries() {
    const a1 = Math.floor(Math.random() * 4) +1;
    console.log("a1", a1)
    let d;
    do {
        d = Math.floor(Math.random() * 11) - 5; // Generates a number between -5 and 5
      } while (d === 0 || d === 1 || d === -1);
    console.log("d", d)
    const a2 = simplifyFraction(a1, d)
    console.log("a2", a2)
    const a3 = simplifyFraction(a2, d)
    console.log("a3", a3)
    const answer_num = a1 * d
    const answer_denom = d-1
    console.log(answer_num, answer_denom)
    const fraction = simplifyFraction(answer_num, answer_denom)
    const question = `${a1} + ${a2} + ${a3} ... = `;
    const answer = `${fraction.numerator}/${fraction.denominator}`
    
    return {
        question: question,
        solution: answer,
    };
}

export const generator2c = {
    'firstmInts': firstmInts,
    'firstmOdds': firstmOdds,
    'firstmEvens': firstmEvens,
    'firstmSquares': firstmSquares,
    'firstmCubes': firstmCubes,
    'arithmeticSeries': arithmeticSeries,
    'infGeoSeries': infGeoSeries,

    }
      