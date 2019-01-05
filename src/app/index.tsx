import React from 'react';
import { createGlobalStyle } from 'styled-components/macro';
import { ScPanel } from './design/organisms/ScPanel';
import Wrapper from './themes/Wrapper';

const GlobalStyle = createGlobalStyle`
  html, body {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.global.backgroundColor};
  }
  
  #root {
    height: 100%;
  }
`;

export const App = React.memo(() => {
  return (
    <Wrapper>
      <GlobalStyle />
      <ScPanel onButtonClick={(item) => (event) => null} />
    </Wrapper>
  );
});
