import React from 'react';
import TextDisplay from '../TextDisplay';

const EndScreen = ({ score, answers, startGame, goToHome }) => {
  return (
    <div className="container text-center my-5">
      <h1 className="my-3">Game Over</h1>
      <h2 className="my-4">Your Score: {score}</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Question</th>
              <th>Solution</th>
              <th>Your Answer</th>
            </tr>
          </thead>
          <tbody>
            {answers.map((item, index) => (
              <tr key={index} className={item.matched ? 'table-success' : 'table-danger'}>
                <td>{item.question && <TextDisplay text={item.question} />}</td>
                <td>{Array.isArray(item.solution) ? item.solution[0] : item.solution}</td>
                <td>{item.userInput}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="my-4">
        <button onClick={startGame} className="btn btn-primary mx-2">Play Again</button>
        <button onClick={goToHome} className="btn btn-secondary mx-2">Back to Practice</button>
      </div>
    </div>
  );
  
};

export default EndScreen;
