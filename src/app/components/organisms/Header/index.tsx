import React from 'react';
import styled from 'styled-components/macro';
import { ConnectionStatus } from "../../atoms/ConnectionStatus";

const StyledHeader = styled.header`
  top: -10px;
  background: rgba(0,0,0,0.2);
  height: 100px;
`;

const ConnectionPositioner = styled.div`
  position: absolute;
  margin: 4px;
`;

const InfoLine = styled.div`
  height: 25px;
  background: rgba(0,0,0,0.3); // there appears to be an ios bug if this value is the same as the one it's placed in...
`;

export function Header() {
  return (
    <StyledHeader>
      <InfoLine>
        <ConnectionPositioner>
          <ConnectionStatus />
        </ConnectionPositioner>
      </InfoLine>
    </StyledHeader>
  );
}
