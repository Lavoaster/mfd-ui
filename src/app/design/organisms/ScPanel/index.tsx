import React, { MouseEventHandler } from 'react';
import styled from 'styled-components/macro';
import { StarCitizenKey } from '../../../api/keymap';
import { Button } from '../../atoms/Button';

const Container = styled.div`
  height: calc(100vh - 32px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1em;
`;

const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: stretch;

  > * {
    flex-basis: 0;
    flex-grow: 1;
    margin: 5px;
  }
`;

const ToggleRow = styled(ButtonRow)`
  > * {
    height: 50px;
  }
`;

interface ScPanelProps {
  onButtonClick: (item: StarCitizenKey) => MouseEventHandler<HTMLButtonElement>;
}

export const ScPanel = React.memo<ScPanelProps>(({ onButtonClick }) => {
  return (
    <Container>
      <ButtonRow>
        <Button onClick={onButtonClick(StarCitizenKey.COMMS)}>Comms</Button>
        <Button onClick={onButtonClick(StarCitizenKey.MOBI_GLAS)}>
          mobiGlas
        </Button>
        <Button onClick={onButtonClick(StarCitizenKey.STAR_MAP)}>
          Star Map
        </Button>
      </ButtonRow>

      <ToggleRow>
        <div />
        <Button onClick={onButtonClick(StarCitizenKey.DECOUPLE)}>
          Decouple
        </Button>
        <Button onClick={onButtonClick(StarCitizenKey.GSAFE)}>GSAFE</Button>
        <Button onClick={onButtonClick(StarCitizenKey.AFTER_BURNER)}>
          After Burner
        </Button>
        <Button onClick={onButtonClick(StarCitizenKey.MAX_THRUST)}>
          Max Thrust
        </Button>
        <Button onClick={onButtonClick(StarCitizenKey.SCM_LIMITER)}>
          SCM Limiter
        </Button>
        <Button onClick={onButtonClick(StarCitizenKey.ESP)}>
          ESP
        </Button>
        <Button onClick={onButtonClick(StarCitizenKey.FREE_LOOK)}>
          FreeLook
        </Button>
        <div />
      </ToggleRow>

      <ButtonRow>
        <div />
        <Button
          onClick={onButtonClick(StarCitizenKey.SPOOL_DRIVE)}
          height={'150px'}
        >
          Spool Drive
        </Button>
        <Button
          onClick={onButtonClick(StarCitizenKey.QUANTUM_JUMP)}
          height={'150px'}
        >
          Quantum Jump
        </Button>
        <div />
      </ButtonRow>

      <ToggleRow>
        <Button onClick={onButtonClick(StarCitizenKey.LOCK)}>Flight Ready</Button>
        <Button onClick={onButtonClick(StarCitizenKey.UNLOCK)}>Landing Gear</Button>
        <Button onClick={onButtonClick(StarCitizenKey.SCANNING)}>
          Cycle Camera
        </Button>
        <Button onClick={onButtonClick(StarCitizenKey.LIGHTS)}>Auto Land</Button>
        <Button onClick={onButtonClick(StarCitizenKey.OPEN_DOORS)}>
          Look Behind
        </Button>
        <Button onClick={onButtonClick(StarCitizenKey.CLOSE_DOORS)}>
          Exit Seat
        </Button>
      </ToggleRow>

      <ButtonRow>
        <Button
          disabled={true}
          onClick={onButtonClick(StarCitizenKey.SELF_DESTRUCT)}
        >
          Self Destruct
        </Button>
        <div />
        <div />
        <Button
          disabled={true}
          onClick={onButtonClick(StarCitizenKey.EJECT)}
        >
          Eject
        </Button>
      </ButtonRow>

      <ButtonRow>
        <Button onClick={onButtonClick(StarCitizenKey.LOCK)}>Lock</Button>
        <Button onClick={onButtonClick(StarCitizenKey.UNLOCK)}>Unlock</Button>
        <Button onClick={onButtonClick(StarCitizenKey.SCANNING)}>
          Scanning
        </Button>
        <Button onClick={onButtonClick(StarCitizenKey.LIGHTS)}>Lights</Button>
        <Button onClick={onButtonClick(StarCitizenKey.OPEN_DOORS)}>
          Open Doors
        </Button>
        <Button onClick={onButtonClick(StarCitizenKey.CLOSE_DOORS)}>
          Close Doors
        </Button>
      </ButtonRow>
    </Container>
  );
});
