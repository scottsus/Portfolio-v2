import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  const [activeURL, setActiveURL] = useState('');

  useEffect(() => {
    const hrefParts = window.location.href.split('/');
    const currentURL = hrefParts[hrefParts.length - 1];
    setActiveURL(currentURL);
  }, []);

  return (
    <NavbarDiv>
      <Button>
        <ButtonText isActive={activeURL === ''}>
          <Link href='/'>Home</Link>
        </ButtonText>
      </Button>
      <Button>
        <ButtonText isActive={activeURL === 'projects'}>
          <Link href='/projects'>Projects</Link>
        </ButtonText>
      </Button>
      <Button>
        <ButtonText isActive={activeURL === 'blog'}>
          <Link href='/blog'>Blog</Link>
        </ButtonText>
      </Button>
      <Button>
        <ButtonText isActive={activeURL === 'guestbook'}>
          <Link href='/guestbook'>Guestbook</Link>
        </ButtonText>
      </Button>
      <Button>
        <ButtonText>
          <Link href={resumeLink} target='_blank'>
            Resume
          </Link>
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
  isActive?: boolean;
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

const resumeLink =
  'https://docs.google.com/document/d/1xABG43h-ft8hQ5mHonDfLTCciuWnraxslb_tuDYxF_w/';
