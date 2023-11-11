import React from 'react';
import TextDisplay from '../../TextDisplay';

const Lesson1c = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Mixed Numbers and Improper Fractions</h5>
                <p className="card-text">
                    Here are some important tricks with mixed number/improper fractions as answers.
                </p>
                <ul className="list-group">
                    {/* Trick for Multiplying an Integer by a Fraction */}
                    <li className="list-group-item">
                        <p>Multiplying an integer by a fraction:</p>
                        <TextDisplay text={`a \\times \\frac{a}{b} = \\left[ a + (a - b) \\right] + \\frac{(a - b)^2}{b}`} />
                        <p>Example:</p>
                        <TextDisplay text={`12 \\times \\frac{12}{7} = 12 + (12 - 7) + \\frac{(12 - 7)^2}{7}`} />
                        <TextDisplay text={`= 12 + 5 + \\frac{25}{7} = 20 \\frac{4}{7}`} />
                    </li>
                    {/* Trick for Adding Two Fractions */}
                    <li className="list-group-item">
                        <p>Adding two fractions of the form a/b and b/a:</p>
                        <TextDisplay text={`\\frac{a}{b} + \\frac{b}{a} = 2 + \\frac{(a - b)^2}{ab}`} />
                        <p>Example:</p>
                        <TextDisplay text={`\\frac{8}{5} + \\frac{5}{8} = 2 + \\frac{(8 - 5)^2}{5 \\cdot 8}`} />
                        <TextDisplay text={`= 2 + \\frac{9}{40} = 2 \\frac{9}{40}`} />
                    </li>
                    {/* Trick for Subtracting Fractions */}
                    <li className="list-group-item">
                        <p>Subtracting fractions in the form a/b - (na - 1)/(nb + 1):</p>
                        <TextDisplay text={`\\frac{a}{b} - \\frac{na - 1}{nb + 1} = \\frac{(a + b)}{b \\cdot (nb + 1)}`} />
                        <p>Example:</p>
                        <TextDisplay text={`\\frac{7}{4} - \\frac{13}{9} = \\frac{7}{4} - \\frac{2 \\cdot 7 - 1}{2 \\cdot 4 + 1} = \\frac{(7 + 4)}{4 \\cdot (2 \\cdot 4 + 1)}`} />
                        <TextDisplay text={`= \\frac{11}{4 \\cdot 9} = \\frac{11}{36}`} />
                    </li>
                    {/* Variation of the Subtracting Fractions Trick */}
                    <li className="list-group-item">
                        <p>Variation of the subtracting fractions formula:</p>
                        <TextDisplay text={`\\frac{a}{b} - \\frac{na + 1}{nb - 1} = -\\frac{(a + b)}{b \\cdot (nb - 1)}`} />
                        <p>Example:</p>
                        <TextDisplay text={`\\frac{9}{5} - \\frac{19}{9} = \\frac{9}{5} - \\frac{2 \\cdot 9 + 1}{2 \\cdot 5 - 1} = -\\frac{(9 + 5)}{5 \\cdot (2 \\cdot 5 - 1)}`} />
                        <TextDisplay text={`= -\\frac{14}{5 \\cdot 9} = -\\frac{14}{45}`} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Lesson1c;
