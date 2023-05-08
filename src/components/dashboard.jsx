import React, { useState } from 'react';
import Response from './response';
import '../App.css';

const Dashboard = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuestion(event.target.elements.question.value);
    event.target.elements.question.value = ''; // clear input field
  };

  return (
    <div className="crystalball">
      <div className="container">
        <h1 className="title">Welcome.</h1>
        <form onSubmit={handleSubmit}>
          <div className="question-container">
            <input type="text" placeholder="What is your question" className="question-input" name="question" autoComplete="off" />
            <button type="submit" className="question-btn">?</button>
          </div>
        </form>
        {question && <Response question={question} />}
      </div>
    </div>
  );
};

export default Dashboard;
