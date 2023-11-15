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


function sum_product_roots() {
    const degree = Math.random() > 0.5 ? 2 : 3;
    const a = Math.random() > 0.5 ? '' : Math.floor(Math.random()*2)+2; // Coefficient for x^2 or x^3, 1 to 9
    const b = Math.random() > 0.5 ?  Math.floor(Math.random() * 9) +1 :  -1 * Math.floor(Math.random() * 9) -1;
    const c = Math.random() > 0.5 ?  Math.floor(Math.random() * 9) +1 :  -1 * Math.floor(Math.random() * 9) -1;
    const d = Math.random() > 0.5 ?  Math.floor(Math.random() * 9) +1 :  -1 * Math.floor(Math.random() * 9) -1;
    
    let b_str
    if (b>0){
        b_str = `+${b}`
    }else{
        b_str = b
    }
    let c_str
    if (c>0){
        c_str = `+${c}`
    }else{
        c_str = c
    }
    let d_str
    if (d>0){
        d_str = `+${d}`
    }else{
        d_str = d
    }
    const polynomial = degree === 2
      ? `${a}x^2 ${b_str}x ${c_str}`
      : `${a}x^3 ${c_str}x^2 ${c_str}x ${d_str}`;
  
    let questionType
    if (degree === 2){
        questionType = Math.random() > 0.5 ? "sum" : "product";}
    else{
            const options = ["sum", "sum2", "product"];
            questionType = options[Math.floor(Math.random() * options.length)];        
    }

  
    let question, solution;
    
    if (a === ''){
      if (degree === 2) {
        if (questionType === "sum") {
          question = ` \\text{ The sum of the roots of }${polynomial} = 0 \\text{ is:}`;
          solution = `${-b}`;
        } else {
          question = ` \\text{The product of the roots of }${polynomial} = 0 \\text{ is:}`;
          solution = `${c}`;
        }
      } else {
        if (questionType === "sum") {
          question = ` \\text{The sum of the roots of }${polynomial} = 0 \\text{ is:}`;
          solution = `${-b}`;
        } else if (questionType ==="sum2"){
          question = ` \\text{The sum of the roots taken two at a time of }${polynomial} = 0 \\text{ is:}`;
          solution = `${c}`;
        }else {
          question = ` \\text{The product of the roots of }${polynomial} = 0 \\text{ is:}`;
          solution = `${-d}`;
        }
      }
    } else{
      
      if (degree === 2) {
        if (questionType === "sum") {
          question = ` \\text{ The sum of the roots of }${polynomial} = 0 \\text{ is:}`;
          solution = simplifyFraction(-b,a)
        } else {
          question = ` \\text{The product of the roots of }${polynomial} = 0 \\text{ is:}`;
          solution = simplifyFraction(c,a)
        }
      } else {
        if (questionType === "sum") {
          question = ` \\text{The sum of the roots of }${polynomial} = 0 \\text{ is:}`;
          solution = simplifyFraction(-b,a)
        } else if (questionType ==="sum2"){
          question = ` \\text{The sum of the roots taken two at a time of }${polynomial} = 0 \\text{ is:}`;
          solution = simplifyFraction(c,a)
        }else {
          question = ` \\text{The product of the roots of }${polynomial} = 0 \\text{ is:}`;
          solution = simplifyFraction(-d,a)
        }
      }
    }
    
  
    return {
        question: question,
        solution: solution,
    };
}

export const generator3c = {
    'sum_product_roots': sum_product_roots,
}

export const s3cSkills = [
    { value: 'sum_product_roots', label: 'Sum/Product of roots of polynomials' },
]