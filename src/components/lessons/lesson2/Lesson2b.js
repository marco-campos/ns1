import React from 'react';
import TextDisplay from '../../TextDisplay'; // Component for displaying Roman numerals

// Other imports
// ...

const Lesson2b = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Converting Roman Numerals to Arabic Numerals</h5>
                <p className="card-text">
                    Roman numerals are based on seven symbols: I, V, X, L, C, D, and M. 
                    These correspond to the Arabic numerals 1, 5, 10, 50, 100, 500, and 1000, respectively.
                </p>
                
                {/* Displaying Roman numerals */}
                <TextDisplay text="I, V, X, L, C, D, M" />

                <p className="card-text mt-3">
                    To convert Roman numerals to Arabic numerals, you need to follow these rules:
                </p>
                <ul>
                    <li>If a smaller numeral appears before a larger numeral, you subtract the smaller one.</li>
                    <li>If a smaller numeral appears after a larger numeral, you add the smaller one.</li>
                </ul>

                <p className="card-text">
                    Let's convert the Roman numeral <TextDisplay text="MCCXXXIV" /> to an Arabic numeral.
                </p>
                <p className="card-text">
                    Break it down into pairs where subtraction is necessary:
                </p>
                
                {/* Displaying Roman numeral breakdown */}
                <TextDisplay text="M + CC + XXX + IV" />

                <p className="card-text">
                    Convert each part and then add or subtract according to the rules:
                </p>

                {/* Displaying the conversion process */}
                <TextDisplay text="1000 + 200 + 30 + (5 - 1)" />

                <p className="card-text">
                    Adding these together gets us the Arabic numeral:
                </p>

                {/* Displaying the final result */}
                <TextDisplay text="1234" />

                
            </div>
        </div>
    );
}

export default Lesson2b;
