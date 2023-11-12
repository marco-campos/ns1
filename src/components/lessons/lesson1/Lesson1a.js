import React from 'react';
import TextDisplay from '../../TextDisplay';

const Lesson1a = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Multiplication Tricks for Quick Calculations</h5>
                <p className="card-text">
                    Multiplication can be intimidating but there are a lot of tricks that help you do it faster.
                </p>
                <ul className="list-group">
                <li className="list-group-item">
                        <p>Multiplying two 2-digit number: FOIL</p>
                        <p>The units digit of your answer comes from multiplying the units digits of the two numbers.</p>
                        <p>The tens digit of your answer is a bit more complex. It's the sum of the products of the outer digits and the inner digits. This means you multiply the units digit of the first number by the tens digit of the second number, do the same with the other two digits, and then add those products together.</p>
                        <p>The hundreds digit comes from multiplying the two tens digits together.</p>
                        <p>If you get more than a single digit at any step, carry over the tens place to the next step.</p>
                        <p>Example:</p>
                        <ul>
                            <li>
                                <TextDisplay text={`\\text{Units: } 8 \\times 4 = 3 \\color{green} 2 \\color{black} \\text{ (write down 2, carry 3)}`} />
                            </li>
                            <li>
                                <TextDisplay text={`\\text{Tens: } 5 \\times 4 + 8 \\times 3 + 3 = 4 \\color{green} 7 \\color{black} \\text{ (write down 7, carry 4)}`} />
                            </li>
                            <li>
                                <TextDisplay text={`\\text{Hundreds: } 5 \\times 3 + 4 = 19`} />
                            </li>
                            <li>
                                <TextDisplay text={`\\text{Answer: } 1972`} />
                            </li>
                        </ul>
                        <p>This is probably the most important number sense trick and should always be your fallback for multiplying two numbers. It can be extended to multiplying a 2 digit number by a 3 digit number or even two 3 digit numbers (See Bryant's book).</p>
                    </li>

                    {/* Multiplying by 11 Trick */}
                    <li className="list-group-item">
                        <p>Multiplying by 11</p>
                    <p>To multiply any two-digit number by 11, start from the ones digits, write it down as the ones digit of your answer, then move along the number to the left and sum pairs of its digits that are next to each other. Think of it as a sliding window. If your sum is ever larger than 9, then carry the tens digit.</p>
                        <p>Example:</p>
                        <TextDisplay text={`641 \\times 11`} />
                        <ul>
                            <li>
                                <TextDisplay text={`\\text{Ones: } 1`} />
                            </li>
                            <li>
                                <TextDisplay text={`\\text{Tens: } 4 + 1 = 5`} />
                            </li>
                            <li>
                            <TextDisplay text={`\\text{Hundreds: } 6 + 4 = 1 \\color{green} 0 \\color{black} \\text{ (Carry the 1)}`} />
                            </li>
                            <li>
                            <TextDisplay text={`\\text{Thousands: } 6 + \\text{ (plus the carried 1)} = 7 `} />
                            </li>
                        </ul>
                        
                        
                        
                        <TextDisplay text={`\\text{Answer: } 7051`} />
                    </li>
                    {/* Multiplying by 25 Trick */}
                    <li className="list-group-item">
                        <p>Multiplying by 25</p>
                        <p>Think of 25 as a quarter of 100. So divide by 4 and then add two zeros to the result:</p>
                        <p>Example:</p>
                        <TextDisplay text={`68 \\times 25 = 68 \\times \\frac{100}{4}`}/>
                        <TextDisplay text={`=\\frac{68}{4} \\times 100`}/>
                        <TextDisplay text={`= 17 \\times 100 = 1700`}/>
                    </li>
                    {/* Multiplying by 75 Trick */}
                    <li className="list-group-item">
                        <p>Multiplying by 75 is just a twist on the 25 trick. Divide by 4, multiply by 3, and then add two zeros:</p>
                        <p>Example:</p>
                        <TextDisplay text={`32 \\times 75 = 32 \\times \\frac{3}{4} \\times 100`}/>
                        <TextDisplay text={`= \\frac{32}{4} \\times 3 \\times 100`}/>
                        <TextDisplay text={`= 8 \\times 3 \\times 100 = 2400`}/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Lesson1a
