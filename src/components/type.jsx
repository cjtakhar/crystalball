import { useState, useEffect } from 'react';

const TypeText = ({ text, delay, fontSize }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedText(prevText => {
        if (prevText.length < text.length) {
          return text.substring(0, prevText.length + 1);
        }
        clearInterval(intervalId);
        return prevText;
      });
    }, delay);
    return () => clearInterval(intervalId);
  }, [text, delay]);

  return <span style={{ fontSize }}>{displayedText}</span>;
};

export default TypeText;


