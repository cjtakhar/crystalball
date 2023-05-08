import React, { useState } from 'react';
import Response from './response';
import TypeText from './type';
import '../App.css';

const Dashboard = () => {
    const [question, setQuestion] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setQuestion(event.target.elements.question.value);
    };
  
    return (
      <div className="crystalball">
        <div className="container">
          <TypeText className="welcome-text" text="Welcome" fontSize="4rem" delay={100} />
          <form onSubmit={handleSubmit}>
            <div className="question-container">
              <input type="text" placeholder="Ask a question" className="question-input" name="question" autocomplete="off" />
              <button type="submit" className="question-btn">?</button>
            </div>
          </form>
          {question && <Response question={question} />}
        </div>
      </div>
    );
  };
  
  export default Dashboard;

