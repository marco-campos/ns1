import React from 'react';
import TextDisplay from '../../TextDisplay';

const Lesson1d = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Quick Tricks for Remainders</h5>
                <p className="card-text">
                    Remainder problems should be fast if you know the tricks.
                </p>
                <ul className="list-group">
                    {/* Trick for Remainder when Dividing by 4 */}
                    <li className="list-group-item">
                        <p>When dividing by 4, just look at the last two digits:</p>
                        <TextDisplay text={`\\text{For } 34431626 \\div 4, \\text{ the remainder is found by } 26 \\div 4 = \\text{ so the remainder is }2`} />
                    </li>
                    {/* Trick for Remainder when Dividing by 8 */}
                    <li className="list-group-item">
                        <p>When dividing by 8, check out the last three digits:</p>
                        <TextDisplay text={`\\text{For } 482345816 \\div 8, \\text{ the remainder is } 816 \\div 8 = \\text{ so the remainder is }0`} />
                    </li>
                    {/* Trick for Remainder when Dividing by 3 */}
                    <li className="list-group-item">
                        <p>For dividing by 3, sum up all the digits:</p>
                        <TextDisplay text={`\\text{Take } 1234567 \\div 3, \\text{ sum the digits } (1+2+3+4+5+6+7) =  \\div 3 = \\text{ so the remainder is }1`} />
                    </li>
                    {/* Trick for Remainder when Dividing by 9 */}
                    <li className="list-group-item">
                        <p>Dividing by 9? Again, add those digits together:</p>
                        <TextDisplay text={`\\text{With } 2349 \\div 9, \\text{ we get } (2+3+4+9) = 18 \\div 9 = \\text{ so the remainder is }0`} />
                    </li>
                    {/* Trick for Remainder when Dividing by 11 */}
                    <li className="list-group-item">
                        <p>Dividing by 11? Subtract the sum of alternating digits:</p>
                        <TextDisplay text={`\\text{For } 4621 \\div 11, \\text{ subtract } (6+1)-(4+2) = 1, \\text{ so the remainder is } 1`} />
                    </li>
                    {/* Trick for Determining Remainders using Modular Arithmetic */}
                    <li className="list-group-item">
                        <p>Complex algebraic expressions divided by a number can be simplified using modular arithmetic. Simply take the remainder of each term and perform the arithmetic</p>
                        <p>Example:</p>
                        <TextDisplay text={`(5^3 - 3 \\times 5^2) \\div 4 = 1^3 -3 \\times 1^2 mod 4 = 1-3  mod 4= -2 mod 4 = 2 mod 4`} />
                        <p>Here I used modular arithmetic notation.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Lesson1d;
