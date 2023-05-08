import { useState, useEffect } from 'react';
import TypeText from './type';

const Response = ({ question, setQuestion }) => {
  const [response, setResponse] = useState('');

  useEffect(() => {
    let timeoutId;

    if (question) {
      const responses = [
        'It is certain.',
        'Without a doubt.',
        'You may rely on it.',
        'Yes, definitely.',
        'It is decidedly so.',
        'As I see it, yes.',
        'Most likely.',
        'Yes.',
        'Outlook good.',
        'Signs point to yes.',
        'Reply hazy, try again.',
        'Better not tell you now.',
        'Ask again later.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        "Don't count on it.",
        'Outlook not so good.',
        'My sources say no.',
        'Very doubtful.',
        'My reply is no.'
      ];

      const randomIndex = Math.floor(Math.random() * responses.length);
      setResponse(responses[randomIndex]);

      // Clear the question after 3 seconds
      timeoutId = setTimeout(() => {
        setQuestion(''); // reset question in Dashboard component
        setResponse('');
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [question, setQuestion]);

  return (
    <div className="answer-container">
      {response && <TypeText text={response} fontSize="2rem" delay={100} />}
    </div>
  );
};

export default Response;

