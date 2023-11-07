# Number Sense Trainer

This project is largely inspired by Bryant Heath's wonderful book on [Number Sense tricks](https://bryantheath.com/files/2018/04/Heath_NSTricks_revA.pdf).

My goal is to have a webapp where to students can practice their number sense anywhere they go. For now, I am just generating the questions/answer keys based on functions designed to generate the types of popular questions that you may see in a number sense exam.

## Short Term Goals
    - Not-so-ugly front-end UI. Nothing special, just enough that it doesn't hurt the eyes
        - This includes compatability with mobile devices.
    - A fully functioning webapp to generate an exam with **most** of the popular exam questions.
    - An option to practice a very specific type of question so that if a student wants to improve on a weakness, then they can just endlessly practice it.

## Long Term Goals
    - Backend servers to track high scores
    - A statistical system to help students pinpoint their weaknesses.
        - This will probably require several key statistics to be kept about the student (question type with percentage answered correctly, maybe even time spent on a question) on the server which can become expensive. Would probably have to introduce a paid system if I ever did make this but one can dream.

## Types of questions implemented:
I split the types of questions into different sections for clarity.
### Section 1
 - foil2x2
 - foil2x3
 - multiply11
 - multiply111
 - multiply101
 - multiply25
 - multiply75

## Types of questions skipped (these are rare, will probably add later)
- division by 25, 75, 50, etc.
- fractions of 100, 1000, 10000
- division by 11, 111 etc, these require special cases.
- multiplication by powers of 11.