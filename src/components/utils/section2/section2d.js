function gcd(a, b) {
    // Ensure the GCD is always positive
    a = Math.abs(a);
    b = Math.abs(b);
  
    while (b !== 0) {
      let t = b;
      b = a % b;
      a = t;
    }
    
    return a;
  }
  
  function simplifyFraction(numerator, denominator) {
    // Find the Greatest Common Divisor (GCD)
    let commonDivisor = gcd(numerator, denominator);
  
    // Simplify the numerator and the denominator
    let simplifiedNumerator = numerator / commonDivisor;
    let simplifiedDenominator = denominator / commonDivisor;
  
    // If the denominator is 1, return the numerator as it is an integer
    if (simplifiedDenominator === 1) {
      return simplifiedNumerator.toString();
    } else {
      // Otherwise, return the simplified fraction
      return simplifiedNumerator + '/' + simplifiedDenominator;
    }
  }

export function distanceConversion() {
    // Define the conversion factors
    const conversions = {
        'miles_to_feet': 5280,
        'miles_to_yards': 1760,
        'feet_to_inches': 12,
        // 'yards_to_feet': 3,
        'yards_to_inches': 36,
        'inches_to_cm': 2.54
    };
    // Create an array of conversion types
    const conversionTypes = Object.keys(conversions);

    // Select a random conversion type
    const randomConversion = conversionTypes[Math.floor(Math.random() * conversionTypes.length)];
    switch (randomConversion) {
        case 'miles_to_feet':
            const numerator1 = Math.floor(Math.random() * 4)+1
            const fraction1 = simplifyFraction(numerator1, 3)
            if (numerator1===3){
                const question = '\\text{One mile =  (feet)}'
                const answer = conversions.miles_to_feet
                return {
                    question: question,
                    solution: answer
                };
            }else{
                const question = `${fraction1} \\text{ of a mile =  (feet)}`
                const [fraction_num, fraction_den] = fraction1.split('/').map(Number) 
                const answer = fraction_num * conversions.miles_to_feet /fraction_den
                return {
                    question: question,
                    solution: answer
                };
            }
        case 'miles_to_yards':
            const numerator2 = Math.floor(Math.random() * 5)+1
            const fraction2 = simplifyFraction(numerator2, 4)
            if (numerator2===4){
                const question = '\\text{One mile =  (yards)}'
                const answer = conversions.miles_to_yards
                return {
                    question: question,
                    solution: answer
                };
            }else{
                const question = `${fraction2} \\text{ of a mile =  (yards)}`
                const [fraction_num, fraction_den] = fraction2.split('/').map(Number) 
                const answer = fraction_num * conversions.miles_to_yards /fraction_den
                return {
                    question: question,
                    solution: answer
                };
            }
        case 'feet_to_inches':
            const numerator3 = Math.floor(Math.random() *11) +1 
            const fraction3 = simplifyFraction(numerator3, 12)
            const [fraction_num, fraction_den] = fraction3.split('/').map(Number)
            const decimalF_I = (fraction_num/fraction_den).toFixed(4)
            const percentageF_I = decimalF_I * 100
            const question3 = Math.random() > 0.5 ? `${decimalF_I} \\text{ of a foot is = (inches)}` : `${percentageF_I} \\% \\text{ of a foot is = (inches)}`
            const answer3 = numerator3
            return {
                question: question3,
                solution: answer3
            }
        case 'inches_to_cm':
            const num = Math.floor(Math.random() * 10) +2
            const question4 = `${num} \\text{ inches = (cm)}`
            const answer4 = num * conversions.inches_to_cm
            return {
                question: question4,
                solution: answer4
            }
        case 'yards_to_inches':
            const numerator5 = Math.floor(Math.random() * 7)+1
            const fraction5 = simplifyFraction(numerator5, 4)
            const [fraction_num1, fraction_den1] = fraction5.split('/').map(Number) 
            const ratio_y_i = fraction_num1/fraction_den1
            if (numerator5===4){
                const question = '\\text{One yard =  (inches)}'
                const answer = conversions.yards_to_inches
                return {
                    question: question,
                    solution: answer
                };
            }else{
                const question = `${ratio_y_i} \\text{ yards =  (inches)}`
                const answer = ratio_y_i * conversions.miles_to_yards
                return {
                    question: question,
                    solution: answer
                };
            }

        default:
            return {}
    }
}

export function velocityConversion() {
    // Define the conversion factors
    const conversions = {
        'mile_hr_to_ft_sec': 22,
        'ft_min_to_in_sec': 1,
        'ft_hr_to_in_min': 1,
        'mile_hr_to_in_sec': 88
    };

    // Create an array of conversion types
    const conversionTypes = Object.keys(conversions);
    // Select a random conversion type
    const randomConversion = conversionTypes[Math.floor(Math.random() * conversionTypes.length)];
    const product = (Math.floor(Math.random() * 10) + 1)
    // Generate a random number for the question
    switch (randomConversion){
        case 'mile_hr_to_ft_sec':
            const question1 = `${product * 15} \\text{ miles per hour }= \\text{(ft per second)}`
            return {
                question: question1,
                solution: product * conversions.mile_hr_to_ft_sec
            }; 
        case 'ft_min_to_in_sec':
            const question2 = `${product * 5} \\text{ ft per min }= \\text{(in per second)}`
            return {
                question: question2,
                solution: product * conversions.ft_min_to_in_sec
        }
        case 'ft_hr_to_in_min':
            const question3 = `${product * 5} \\text{ ft per hr }= \\text{(in per minute)}`
            return {
                question: question3,
                solution: product * conversions.ft_hr_to_in_min
        }
        case 'mile_hr_to_in_sec':
            const question4 = `${product * 5} \\text{ miles per hr }= \\text{(in per sec)}`
            return {
                question: question4,
                solution: product * conversions.mile_hr_to_in_sec
        }
        default:
            return{}
    }
}

export const generator2d = {
    'distanceConversion': distanceConversion,
    'velocityConversion': velocityConversion,

}
  
  export const s2dSkills = [
    { value: 'distanceConversion', label: 'Converting distances' },
    { value: 'velocityConversion', label: 'Converting velocities' },
]