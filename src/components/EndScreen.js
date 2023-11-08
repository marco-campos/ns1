import React from 'react';
import TextDisplay from './TextDisplay';

const EndScreen = ({ score, answers, startGame, goToHome }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2>Your Score: {score}</h2>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Solution</th>
            <th>Your Answer</th>
          </tr>
        </thead>
        <tbody>
          {answers.map((item, index) => (
            <tr key={index} style={{ backgroundColor: item.matched ? 'green' : 'red' }}>
              <td>{item.question && <TextDisplay text={item.question} />}</td>
              <td>{Array.isArray(item.solution) ? item.solution[0] : item.solution}</td>
              <td>{item.userInput}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={startGame}>Play Again</button>
      <button onClick={goToHome}>Back to Home</button>
    </div>
  );
};

export default EndScreen;
