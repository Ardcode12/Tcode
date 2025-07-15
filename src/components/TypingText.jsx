import React, { useState, useEffect } from 'react';

const TypingText = ({ fullText, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [fullText]);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText, speed]);

  return <>{displayedText}</>;
};

export default TypingText;
