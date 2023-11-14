# Number Sense Trainer

Live link to the netlify app: [Number Sense Practice](https://numbersensetricks.netlify.app/)

This project is largely inspired by [Bryant Heath's wonderful book](https://bryantheath.com/files/2018/04/Heath_NSTricks_revA.pdf).

My goal is to have a webapp where to students can practice their number sense anywhere they go. For now, I am just generating the questions/answer keys based on functions designed to generate the types of popular questions that you may see in a number sense exam.

## Short Term Goals
- Create lessons for the major tricks. Include formulas for the simple problems
- A fully functioning webapp to generate an exam with **most** of the popular exam questions.
    - I have a product that **works** so now I want to completely flesh out the bare minimum utility that I wanted. After this I will focus on cosmetics and trickier features.
    - As long as I go through the book, implement all of the standard tricks and keep up with the ones I skipped by writing them bellow then that should be good enough.
- Look into whether or not it is worth implementing global state management through Redux.
    - This might be worth it since I want students to be able to log in later on. 
- Implement the option for answering within 10 percent of an answer.


## Long Term Goals
- Backend servers to track high scores
- A statistical system to help students pinpoint their weaknesses.
    - This will probably require several key statistics to be kept about the student (question type with percentage answered correctly, maybe even time spent on a question) on the server which can become expensive. Would probably have to introduce a paid system if I ever did make this but one can dream.

## Types of questions skipped (these are rare, will probably add later)
- division by 25, 75, 50, etc.
- fractions of 100, 1000, 10000
- division by 11, 111 etc, these require special cases.
- multiplication by powers of 11.
- double and half trick
- multiplying equidistant numbers from a third number
- multiplying reverses
- Special case factoring trick
    - Honestly, this one pops up sufficiently often but it is non-trivial to code so it'll be for later...
- Multiplying two numbers ending in 5.
- Division by 9 mixed number trick (is evident by the remainder trick)
- Converting a/40, a/80 into decimals.
- Summation of a/b(b+1)+ a/(b+1)(b+2) + ....
- Powers of 2,3,5
- Special Fractions
- Applications to some of the memorizations of roots.
- Roman Numeral Arithmetic
- Platonic solis
- pi and e approximations
- distance and velocity conversions
    - ***
- conversions of distance, area and volume
    - ****
- fluid and weight conversions
    - ****
- celsius to fahrenheit
- sum of alternating squares
- fibonacci stuff
    - *** At least put in a chart for memorization.
- integral divisors
    - *** should probably implement this.
- exterior/interior angles
- triangular, pentagonal, etc numbers.
- sides of a triangle
- equilaterla triangle
- solids formulas
    - ***
- Combinations and Permutations 
    - Easy to implement.
- Trig values
    - *** 
- Trig formulas
- Graphs of Trig
- parabola vertex
- discriminant + roots
- GCD LCM 
    - *** important
- sum of coefficients in an expansion.
- sum/products of roots 
    - *** very important, also for a math test.
- units digit x^n
- exponent rules
- log rules
- square root problems 
    - ***
- complex numbers
- powers of i
- function inverses
- patterns
    - *** Kind of hard, but might just hardcode a couple of patterns and randomize the term picked.
- probability/odds
- sets 
    - *** Might be hard.
- Changing bases
    - *** Probably not super hard, will be a bit annoying I think though.
    - converting to, from and between
- converting decimals
- bases with operations
- other bases stuff
- repeating decimals
    - *** super important. very easy to implement, several questions too with simple formulas.
- modular arithmetic
- factorial sums
- wilson's theorem
- limits
- derivatives
- integrals
- binomial approx
- more conversions (4.2.1)
- Special defns of numbers
- square root approximations
    - * Might be easy to just tack on.
- A bunch of the integral divisors questions
## TODO

### Section 1: Arithmetic
### Section 2: Memorization
- square root problems 
- distance and velocity conversions
- conversions of distance, area and volume
- fluid and weight conversions
- fibonacci stuff
    - *** At least put in a chart for memorization.

### Section 3: Algebra + Geometry
- integral divisors
    - *** should probably implement this.
- Combinations and Permutations 
    - Easy to implement.
- solids formulas
- GCD LCM 
    - *** important
- sum of coefficients in an expansion.
### Section 4: Pre-calculus
- Trig values
- Trig formulas
- patterns
    - *** Kind of hard, but might just hardcode a couple of patterns and randomize the term picked.
- sets 
    - *** Might be hard.
- Changing bases
    - *** Probably not super hard, will be a bit annoying I think though.
    - converting to, from and between
### Section 5: Calculus
- Basic Derivatives