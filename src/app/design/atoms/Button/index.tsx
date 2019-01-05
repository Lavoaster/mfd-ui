import React from 'react';
import styled from 'styled-components/macro';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  height?: string;
}

export const Button = styled.button<ButtonProps>`
  border: 1px solid white;
  background: #0c1f2c;
  box-shadow: 0 0 6px rgba(255, 255, 255, 1), 0 0 6px rgba(255, 255, 255, 1),
    0 0 2px rgba(255, 255, 255, 1), 0 0 2px rgba(255, 255, 255, 1);
  color: #e4f9ff;
  height: ${({ height }) => height};
  //width: 200px;
  transition: all 150ms linear;

  &:hover {
    background: #0b3440;
  }
  
  &:disabled {
    opacity: .3;
    box-shadow: none;
    border: none;
  }
`;
Button.defaultProps = {
  type: 'button',
  height: '100px',
};
