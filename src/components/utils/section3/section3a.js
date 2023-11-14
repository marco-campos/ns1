// Simplify a fraction
export function simplifyFraction(numerator, denominator) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const greatestCommonDivisor = gcd(numerator, denominator);
    return {
        numerator: numerator / greatestCommonDivisor,
        denominator: denominator / greatestCommonDivisor
    };
}

export function dot_aaaa() {
    const num1 = Math.floor(Math.random() * 8) + 1
    const question = `.${num1}${num1}${num1}${num1}... \\text{can be written as: (fraction)}`;
    const fraction = simplifyFraction(num1, 9)
    const answer = `${fraction.numerator}/${fraction.denominator}`;
    const pair = {
      question: question,
      solution: answer,
    };
    return pair
}


export function dot_abab() {
    const num1 = Math.floor(Math.random() * 9) + 1
    const num2 = Math.floor(Math.random() * 9) + 1
    const ab = 10 * num1 + num2
    const question = `.${num1}${num2}${num1}${num2}... \\text{can be written as: (fraction)}`;
    const fraction = simplifyFraction(ab, 99)
    const answer = `${fraction.numerator}/${fraction.denominator}`;
    const pair = {
      question: question,
      solution: answer,
    };
    return pair
}

export function dot_abbb() {
    const num1 = Math.floor(Math.random() * 9) + 1
    const num2 = Math.floor(Math.random() * 9) + 1
    const top = 10 * num1 + num2 - num1;
    const question = `.${num1}${num2}${num2}${num2}... \\text{can be written as: (fraction)}`;
    const fraction = simplifyFraction(top, 90)
    const answer = `${fraction.numerator}/${fraction.denominator}`;
    const pair = {
      question: question,
      solution: answer,
    };
    return pair
}

export function dot_abcbc() {
    const num1 = Math.floor(Math.random() * 9) + 1
    const num2 = Math.floor(Math.random() * 9) + 1
    const num3 = Math.floor(Math.random() * 9) + 1

    const top = 100 * num1 + 10*num2 +num3- num1;
    const question = `.${num1}${num2}${num3}${num2}${num3}... \\text{can be written as: (fraction)}`;
    const fraction = simplifyFraction(top, 990)
    const answer = `${fraction.numerator}/${fraction.denominator}`;
    const pair = {
      question: question,
      solution: answer,
    };
    return pair
}

export const generator3a = {
    // 'sum_product_roots': sum_product_roots,
    'dot_aaaa':dot_aaaa,
    'dot_abab': dot_abab,
    'dot_abbb': dot_abbb,
    'dot_abcbc': dot_abcbc

}

export const s3aSkills = [
    { value: 'dot_aaaa', label: 'Converting .aaa... to a fraction' },
    { value: 'dot_abab', label: 'Converting .abab... to a fraction' },
    { value: 'dot_abbb', label: 'Converting .abbb... to a fraction' },
    { value: 'dot_abcbc', label: 'Converting .abcbc... to a fraction' },
];