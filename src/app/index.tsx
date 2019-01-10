import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components/macro';
import { ScPanel } from './design/organisms/ScPanel';
import { SocketProvider, useSocket } from "./hooks/useSocket";
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

const PulseOpacity = keyframes`
  0% {
    opacity: 1;
  }
  
  50% {
    opacity: 0.5;
  }
  
  100% {
    opacity: 1;
  }
`;

const ConnectionContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
`;

const ConnectionIndicator = styled.div`
  border-radius: 100%;
  width: 1em;
  height: 1em;
`;

const LoadingIndicator = styled(ConnectionIndicator)`
  background: #fffb72;
  animation: ${PulseOpacity} 1.5s linear infinite;
`;

const ErrorIndicator = styled(ConnectionIndicator)`
  background: #c24616;
  animation: ${PulseOpacity} 1.5s linear infinite;
`;

const SuccessIndicator = styled(ConnectionIndicator)`
  background: #46c22d;
`;

function ConnectionStatus() {
  const [ isOnline, setIsOnline ] = useState<null|boolean|Error>(null);
  const [ value, socket ] = useSocket();

  useEffect(() => {
    if (socket.connected && isOnline !== true) {
      setIsOnline(true);
    }

    if (! socket.connected && isOnline !== false) {
      setIsOnline(false);
    }

    socket.on('connect', () => {
      setIsOnline(true);
    });

    socket.on('disconnect', () => {
      setIsOnline(false);
    });
  });

  if (isOnline instanceof Error) {
    return (
      <ErrorIndicator />
    );
  }

  if (isOnline === null) {
    return (
      <LoadingIndicator />
    );
  }

  return isOnline ? <SuccessIndicator /> : <ErrorIndicator />;
}

export const App = React.memo(() => {
  return (
    <Wrapper>
      <SocketProvider url={'http://192.168.0.15:6789'}>
        {(socket) => (
          <>
            <GlobalStyle />
            <ConnectionContainer>
              <ConnectionStatus />
            </ConnectionContainer>
            <ScPanel onButtonClick={(item) => () => socket.emit('run_action', {name: item})} />
          </>
        )}
      </SocketProvider>
    </Wrapper>
  );
});
