import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import { ConnectionStatus } from "./components/atoms";
import { SocketProvider } from "./components/hooks/useSocket";
import { Header } from "./components/organisms/Header";
import { ScPanel } from './components/organisms/ScPanel';
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
      <SocketProvider url={'http://192.168.21.42:6789'}>
        {(socket) => (
          <>
            <GlobalStyle />
            <Header/>
            <ScPanel onButtonClick={(item) => () => socket.emit('run_action', {name: item})} />
          </>
        )}
      </SocketProvider>
    </Wrapper>
  );
});
