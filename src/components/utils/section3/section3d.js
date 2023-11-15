function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
  }
  
  function permutation(n, r) {
    return factorial(n) / factorial(n - r);
  }
  
  function combination(n, r) {
    return factorial(n) / (factorial(r) * factorial(n - r));
  }
  
  function permutationQuestion() {
    const n = Math.floor(Math.random() * 5) + 5; // n will be between 5 and 9
    const r = Math.floor(Math.random() * (n - 1)) + 1; // r will be between 1 and n-1
    const answer = permutation(n, r);
  
    return {
      question: `_${n}\\text{P}_${r} = `,
      solution: answer.toString(),
    };
  }
  
  function combinationQuestion() {
    const n = Math.floor(Math.random() * 5) + 5; // n will be between 5 and 9
    const r = Math.floor(Math.random() * n) + 1; // r will be between 1 and n
    const answer = combination(n, r);
  
    return {
      question: `_${n}\\text{C}_${r} = `,
      solution: answer.toString(),
    };
  }
  
  export const generator3d = {
    'permutationQuestion': permutationQuestion,
    'combinationQuestion': combinationQuestion,

}
  
  export const s3dSkills = [
    { value: 'permutationQuestion', label: 'Computing Permutations' },
    { value: 'combinationQuestion', label: 'Computing Combinations' },
]