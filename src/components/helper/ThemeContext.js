// ThemeContext.js
import React from 'react';

const ThemeContext = React.createContext({
  darkTheme: false,
  toggleTheme: () => {},
});

export default ThemeContext;
