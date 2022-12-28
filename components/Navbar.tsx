import React, { useState } from 'react';
import styled from 'styled-components';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  const [activeID, setActiveID] = useState(0);
  const handleIDs = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setActiveID(parseInt(target.id));
  };
  const mouseEventHandler =
    handleIDs as React.MouseEventHandler<HTMLButtonElement>;
  return (
    <NavbarDiv>
      <Button id='0' onClick={mouseEventHandler}>
        <ButtonText id='0' isActive={activeID === 0 ? true : false}>
          Home
        </ButtonText>
      </Button>
      <Button id='1' onClick={mouseEventHandler}>
        <ButtonText id='1' isActive={activeID === 1 ? true : false}>
          Projects
        </ButtonText>
      </Button>
      <Button id='2' onClick={mouseEventHandler}>
        <ButtonText id='2' isActive={activeID === 2 ? true : false}>
          Blog
        </ButtonText>
      </Button>
      <Button id='3' onClick={mouseEventHandler}>
        <ButtonText id='3' isActive={activeID === 3 ? true : false}>
          Guestbook
        </ButtonText>
      </Button>
      <Button id='4' onClick={mouseEventHandler}>
        <ButtonText id='4' isActive={activeID === 4 ? true : false}>
          Resume
        </ButtonText>
      </Button>
      <ThemeBox>
        <FontAwesomeIcon icon={faMoon} style={moonStyles} />
      </ThemeBox>
    </NavbarDiv>
  );
}

const NavbarDiv = styled.div`
  width: 100%;
  height: 45px;
  margin: 35px 0px 35px -20px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

const Button = styled.button`
  height: 100%;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  padding: 0px 20px;
  cursor: pointer;
  :hover {
    background-color: #222222;
  }
`;

interface IButtonText {
  isActive: boolean;
}

const ButtonText = styled.h2<IButtonText>`
  font-size: 24px;
  font-family: Articulat, Arial;
  font-weight: ${(props) => (props.isActive ? 600 : 500)};
  color: ${(props) => (props.isActive ? '#eaeaea' : '#858080')};
  margin: auto auto;
`;

const ThemeBox = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: #eaeaea;
  margin: 0 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const moonStyles: React.CSSProperties = {
  width: '35px',
  height: '35px',
  color: '#183052',
};
