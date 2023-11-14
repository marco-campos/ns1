export function baseXto10() {
    const num1 = Math.floor(Math.random() * 8) + 1;
    const num2 = Math.floor(Math.random() * 8) + 1;
    const num3 = Math.floor(Math.random() * 8) + 1;
    const num = 100 * num1 + 10 * num2 + num3;

    const base = Math.floor(Math.random() * 8) + 2;
    const question = `${num}_${base} = \\text{(base 10)}`;
    const answer = String(num1 * base*base + num2 * base + num3);
    const pair = {
      question: question,
      solution: answer,
    };
    return pair
}

export function base10toX() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 8) + 1;
    const num3 = Math.floor(Math.random() * 8) + 1;
    const num = 100 * num1 + 10 * num2 + num3;

    const base = Math.floor(Math.random() * 8) + 2;
    const question = `${num}_{10} = \\text{(base ${base})}`;
    const answer = String(num.toString(base));
    const pair = {
      question: question,
      solution: answer,
    };
    return pair
}

export function baseXtoY(){
    const num1 = Math.floor(Math.random() * 2) + 1;
    const num2 = Math.floor(Math.random() * 8) + 1;
    const num3 = Math.floor(Math.random() * 8) + 1;
    const num = 100 * num1 + 10 * num2 + num3;

    const base1 = Math.floor(Math.random() * 8) + 2;
    const base2 = Math.floor(Math.random() * 8) + 2;
    const question = `${num}_${base1} = \\text{(base ${base2})}`;
    const numXto10 = num1 * base1*base1 + num2 * base1 + num3
    const num10toY = numXto10.toString(base2)
    const answer = String(num10toY)
    const pair = {
        question: question,
        solution: answer,
      };
      return pair

}


// More change of bases problems required, these are the easy ones.

export const generator4a = {
    'baseXto10': baseXto10,
    'base10toX': base10toX,
    'baseXtoY': baseXtoY

}

export const s4aSkills = [
    { value: 'baseXto10', label: 'Convert a number to base 10' },
    { value: 'base10toX', label: 'Convert from base 10 to a different number' },
    { value: 'baseXtoY', label: 'Convert between different bases' },
]
