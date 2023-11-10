export function squaresdecimal() {
    const number = Math.floor(Math.random() * (49)) + 2;
    const number_decimal = number / 10
    const question = `${number_decimal}^2 = (decimal)`;
    const answer = String(number_decimal*number_decimal);
    
    return {
      question: question,
      solution: answer,
    };
  }

  
export function squaresPercentage() {
const number = Math.floor(Math.random() * (49)) + 2;
const question = `${number} % of ${number} is: (decimal)`;
const answer = String(number * number / 100);

return {
    question: question,
    solution: answer,
};
}

export function convertToRoman(num) {
    const romanMap = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' }
    ];
  
    let roman = '';
    for (let i = 0; i < romanMap.length; i++) {
      while (num >= romanMap[i].value) {
        roman += romanMap[i].numeral;
        num -= romanMap[i].value;
      }
    }
    return roman;
  }
  
export function romanNumeral() {
    const number = Math.floor(Math.random() * (2100 - 45 + 1)) + 45;
    const romanNumeral = convertToRoman(number);
    return {
      question: `${romanNumeral} = (Arabic Numeral)`,
      solution: number,
    };
  }
