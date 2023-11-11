import React from 'react';
import TextDisplay from '../../TextDisplay';

const Lesson2c = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Sums of Series</h5>
                <p className="card-text">
                    Understanding the formulas for different types of sums can be a powerful tool in mathematics. Here are some key formulas you should know:
                </p>
                <ul class="list-group">
                    <li class="list-group-item">
                        <p>Sum of the first m natural numbers</p>
                        <TextDisplay text={` \\sum_{n=1}^{m} n = 1 + 2 + 3 + \\cdots + m = \\frac{m \\cdot (m + 1)}{2} `} />
                    </li>
                    <li class="list-group-item">
                    <p>Sum of the first m odd numbers</p>
                    <TextDisplay text={` \\sum_{n=1}^{m} (2n - 1) = 1 + 3 + 5 + \\cdots + (2m - 1) = m^2 `} />
                    </li>
                    <li class="list-group-item">
                    <p>Sum of the first m even numbers</p>
                    <TextDisplay text={` \\sum_{n=1}^{m} 2n = 2 + 4 + 6 + \\cdots + 2m = m \\cdot (m + 1) `} />
                    </li>
                    <li class="list-group-item">
                    <p>Sum of the first m squares</p>
                    <TextDisplay text={` \\sum_{n=1}^{m} n^2 = 1^2 + 2^2 + \\cdots + m^2 = \\frac{m \\cdot (m + 1) \\cdot (2m + 1)}{6} `} />
                    </li>
                    <li class="list-group-item">
                    <p>Sum of the first m cubes</p>
                    <TextDisplay text={` \\sum_{n=1}^{m} n^3 = 1^3 + 2^3 + \\cdots + m^3 = \\left( \\frac{m \\cdot (m + 1)}{2} \\right)^2 `} />
                    </li>
                    <li class="list-group-item">
                    <p>Alternating sum of the first m squares</p>
                    <TextDisplay text={` \\sum_{n=1}^{m} (-1)^{n+1}n^2 = 1^2 - 2^2 + 3^2 - \\cdots \\pm m^2 = \\pm \\frac{m \\cdot (m + 1)}{2} `} />
                    </li>
                    <li class="list-group-item">
                        <p>Arithmetic series which can easily be recognized by a common difference also have a formula:</p>
                        <TextDisplay text={` \\sum_{i=1}^{ m } a_i = a_1 + a_2 + a_3 + ... + a_m = \\frac{ (a_1 + a_m ) \\cdot m}{2}`}/>
                        <p>Where d is the common difference and m is the number of terms which can be computed by: </p>
                        <TextDisplay text={` m = \\frac{a_m -a_1}{d} + 1`} />
                    </li>
                </ul>
                
            </div>
        </div>
    );
}

export default Lesson2c;
