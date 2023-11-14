function sum_product_roots() {
    const degree = Math.random() > 0.5 ? 2 : 3;
    const a = Math.floor(Math.random() * 9) + 1; // Coefficient for x^2 or x^3, 1 to 9
    let b = Math.floor(Math.random() * 19) - 9; // Coefficient for x or x^2, -9 to 9
    while (b===0 || b ===1){
        b = Math.floor(Math.random() * 19) - 9;
    }
    let c = Math.floor(Math.random() * 19) - 9; // Coefficient for constant or x, -9 to 9
    while (c===0 || c===1){
        c= Math.floor(Math.random() * 19) - 9;
    }
    let d = degree === 3 ? Math.floor(Math.random() * 19) - 9 : null; // Coefficient for constant if cubic, -9 to 9
    while (d===0 || d===1){
        d= Math.floor(Math.random() * 19) - 9;
    }
    
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
      ? `x^2 ${b_str}x ${c_str}`
      : `x^3 ${c_str}x^2 ${c_str}x ${d_str}`;
  
    let questionType
    if (degree === 2){
        questionType = Math.random() > 0.5 ? "sum" : "product";}
    else{
            const options = ["sum", "sum2", "product"];
            questionType = Math.floor(Math.random() * options.length);        
    }

  
    let question, solution;
  
    if (degree === 2) {
      if (questionType === "sum") {
        question = ` \\text{ The sum of the roots of }${polynomial} = 0 \\text{ is:}`;
        solution = `${-b}/${a}`;
      } else {
        question = ` \\text{The product of the roots of }${polynomial} = 0 \\text{ is:}`;
        solution = `${c}/${a}`;
      }
    } else {
      if (questionType === "sum") {
        question = ` \\text{The sum of the roots of }${polynomial} = 0 \\text{ is:}`;
        solution = `${-b}/${a}`;
      } else if (questionType ==="sum2"){
        question = ` \\text{The sum of the roots taken two at a time of }${polynomial} = 0 \\text{ is:}`;
        solution = `${c}/${a}`;
      }else {
        question = ` \\text{The product of the roots of }${polynomial} = 0 \\text{ is:}`;
        solution = `${-d}/${a}`;
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