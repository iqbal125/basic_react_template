import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 180px;
  height: 50px;
  border-radius: 20px;
	border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 20px;
  background: white;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
	transition: all 0.2s ease;
	&:hover {
		transform: scale(1.1);
	}

  @media screen and (max-width: 680px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`
interface ActionButtonProps {
	handleChangeBackground: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ handleChangeBackground }: ActionButtonProps) => {
	return <StyledButton onClick={handleChangeBackground}>Get Started</StyledButton>
}

export default ActionButton;
