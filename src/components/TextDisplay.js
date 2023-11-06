import React from 'react';
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const TextDisplay = ({ text }) => {
  // Check if text is a non-empty string
  if (typeof text === 'string' && text.trim().length > 0) {
    return <InlineMath math={text} />;
  } else {
    // Return null or some placeholder if the text is not valid
    return null;
  }
};

export default TextDisplay;
