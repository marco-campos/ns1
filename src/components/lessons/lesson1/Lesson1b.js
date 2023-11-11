import React from 'react';
import TextDisplay from '../../TextDisplay';

const Lesson1b = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Factoring and Squaring Tricks</h5>
                <p className="card-text">
                    Factoring can help simplify many problems into standard FOIL questions. Below are some examples where you should recognize an expression to factor.
                </p>
                <ul className="list-group">
                    {/* Factoring Numerical Problems */}
                    <li className="list-group-item">
                        <p>Factoring with common bases:</p>
                        <p>Example:</p>
                        <TextDisplay text={`18^2 + 54^2`}/>
                        <TextDisplay text={`= 18^2 + (3 \\cdot 18)^2 = 18^2 \\cdot (1 + 9)`} />
                        <TextDisplay text={`= 18^2 \\cdot 10 = 3240`} />
                    </li>
                    {/* Factoring Sums */}
                    <li className="list-group-item">
                        <p>Factoring sums:</p>
                        <p>Example:</p>
                        <TextDisplay text={`52 \\times 13 + 14 \\times 13`}/>
                        <TextDisplay text={`= 13 \\cdot (52 + 3)`} />
                        <TextDisplay text={`= 13 \\cdot 55 = 715`} />
                    </li>
                    {/* Sum of Consecutive Squares */}
                    {/* <li className="list-group-item">
                        <p>Sum of consecutive squares:</p>
                        <p>Example:</p>
                        <TextDisplay text={`22^2 + 23^2`}/>
                        <TextDisplay text={`= 22^2 + (22 + 1)^2 = 2 \\cdot 22^2 + 2 \\cdot 22 + 1^2`} />
                        <TextDisplay text={`= 2 \\cdot 484 + 44 + 1 = 1013`} />
                    </li> */}
                    {/* Difference of Squares */}
                    <li className="list-group-item">
                        <p>Difference of squares:</p>
                        <p>Example:</p>
                        <TextDisplay text={`31^2 - 32^2`}/>
                        <TextDisplay text={`= (31 - 32)(31 + 32)`} />
                        <TextDisplay text={`= -1 \\times 63=  -63`} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Lesson1b