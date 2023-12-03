import React, { useState } from 'react';
import './ButtonInput.css'; // Import the CSS file


const ButtonInput = ({ onSubmit }) => {
  const [inputArray, setInputArray] = useState([]);
  const [addDirection, setAddDirection] = useState('end'); // 'start' or 'end'

  const buttons = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '.', '0', '/'
  ];

  const handleButtonClick = (value) => {
    const updatedArray = addDirection === 'start' ? [value, ...inputArray] : [...inputArray, value];
    setInputArray(updatedArray);
  };

  const toggleAddDirection = (e) => {
    e.preventDefault(); // Prevent default to avoid triggering form submission
    setAddDirection(prev => prev === 'end' ? 'start' : 'end');
  };

  const handleSubmitClick = (e) => {
    e.preventDefault(); // Prevent default here as well
    onSubmit(inputArray.join(''));
    setInputArray([]); // Clear the input array after submission

  };

  return (
    <div className="button-input-container">
      <div className="answer-display">Answer to Submit: {inputArray.join('')}</div>

      <div className="button-grid">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.preventDefault();
              handleButtonClick(button);
            }}
            className="btn btn-secondary calculator-button"> {/* Bootstrap class for styling */}
            {button}
          </button>
        ))}
      </div>
      
      <div className="control-buttons">
        <button onClick={(e) => {
          e.preventDefault();
          handleButtonClick(' ');
        }} className="btn btn-primary control-button space-button"> {/* Bootstrap class for styling */}
          Space
        </button>
        <button onClick={toggleAddDirection} className="btn btn-primary control-button arrow-button"> {/* Bootstrap class for styling */}
          Writing Direction: {addDirection === 'end' ? '→' : '←'}
        </button>
      </div>

      <button onClick={handleSubmitClick} className="btn btn-primary submit-button"> {/* Bootstrap class for styling */}
        Submit Answer
      </button>
    </div>
  );
};

export default ButtonInput;

