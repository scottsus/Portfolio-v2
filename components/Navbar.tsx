import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { small, medium } from '../styles/responsive';

export default function Navbar() {
  const [activeURL, setActiveURL] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  useEffect(() => {
    const hrefParts = window.location.href.split('/');
    const currentURL = hrefParts[hrefParts.length - 1];
    setActiveURL(currentURL);
  }, []);

  return (
    <NavbarDiv>
      <Hamburger onClick={toggle}>
        <Image
          src='/imgs/Hamburger.svg'
          height={25}
          width={35}
          alt='Hamburger'
        />
      </Hamburger>
      <Menu id={isExpanded ? 'nav-expanded' : 'nav-collapsed'}>
        <Button className='nav-item'>
          <ButtonText isActive={activeURL === ''}>
            <Link href='/'>Home</Link>
          </ButtonText>
        </Button>
        <Button className='nav-item'>
          <ButtonText isActive={activeURL === 'projects'}>
            <Link href='/projects'>Projects</Link>
          </ButtonText>
        </Button>
        <Button className='nav-item'>
          <ButtonText isActive={activeURL === 'blog'}>
            <Link href='/blog'>Blog</Link>
          </ButtonText>
        </Button>
        <Button className='nav-item'>
          <ButtonText isActive={activeURL === 'guestbook'}>
            <Link href='/guestbook'>Guestbook</Link>
          </ButtonText>
        </Button>
        <Button className='nav-item'>
          <ButtonText>
            <Link href={resumeLink} target='_blank'>
              Resume
            </Link>
          </ButtonText>
        </Button>
      </Menu>
      <ThemeBox>
        <FontAwesomeIcon icon={faMoon} style={moonStyles} />
      </ThemeBox>
    </NavbarDiv>
  );
}

const NavbarDiv = styled.div`
  width: 100%;
  height: 45px;
  margin: 20px 0px 25px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  @media (${small}) {
    #nav-collapsed {
      display: none;
    }
    #nav-expanded {
      display: flex;
    }
  }
`;

const Hamburger = styled.button`
  width: 39px;
  height: 29px;
  padding: 2px;
  background-color: transparent;
  display: none;

  @media (${small}) {
    display: inline;
  }
`;

const Menu = styled.div`
  @media (${small}) {
    position: absolute;
    top: 80px;
    width: 100%;
    height: 100vh;
    padding-left: 4px;
    background-color: #181a21;
    opacity: 0.9;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    .nav-item {
      margin: 15px 0;
    }
  }
`;

const Button = styled.button`
  height: 30px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  margin: 0px 10px;
  padding: 1px 0;
  cursor: pointer;
  :first-child {
    margin-left: 0;
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
  :hover {
    text-decoration: underline 3px;
    text-underline-offset: 7px;
  }
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
