import { normalize } from 'polished';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import { rsi } from './rsi';

const GlobalStyle = createGlobalStyle`
  ${normalize};
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const Wrapper: React.FunctionComponent = ({ children }) => {
  return (
    <ThemeProvider theme={rsi}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  );
};

// tslint:disable-next-line
export default Wrapper;
