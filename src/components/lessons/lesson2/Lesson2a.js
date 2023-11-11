import React from 'react';

const Lesson2a = () => {
  // Generate an array for numbers up to 30
  const numbers = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Memorize Your Squares and Cubes</h5>
        <p className="card-text">
          Knowing squares and cubes up to 30 and 25 respectively can be incredibly helpful. Below is a table to aid in memorization:
        </p>
        
        {/* Combined Squares and Cubes Table */}
        <h6>Numbers, Squares, and Cubes up to 30</h6>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Number (n)</th>
              <th>Square (n²)</th>
              <th>Cube (n³)</th>
            </tr>
          </thead>
          <tbody>
            {numbers.map((num) => (
              <tr key={num}>
                <td>{num}</td>
                <td>{num ** 2}</td>
                <td>{num ** 3}</td> {/* Only show cubes up to 25 */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Lesson2a;
