import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components/macro";
import { useSocket } from "../../hooks/useSocket";

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
  display: flex;
  align-items: center;
  color: white;
`;

const ConnectionIndicator = styled.div`
  display: inline-flex;
  border-radius: 100%;
  width: 1em;
  height: 1em;
  margin-right: .5em;
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

export function ConnectionStatus() {
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
      <ConnectionContainer>
        <ErrorIndicator /> There was an error connecting to your machine
      </ConnectionContainer>
    );
  }

  if (isOnline === null) {
    return (
      <ConnectionContainer>
        <LoadingIndicator /> Connecting...
      </ConnectionContainer>
    );
  }

  if (! isOnline) {
    return (
      <ConnectionContainer>
        <ErrorIndicator /> Offline
      </ConnectionContainer>
    );
  }

  return (
    <ConnectionContainer>
      <SuccessIndicator /> Connected
    </ConnectionContainer>
  );
}
