import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { small, medium } from '../styles/responsive';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggle = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  return (
    <NavbarDiv>
      <Hamburger onClick={toggle}>
        <Image
          src="/imgs/Hamburger.svg"
          height={25}
          width={35}
          alt="Hamburger"
        />
      </Hamburger>
      <Menu
        id={isExpanded ? 'nav-expanded' : 'nav-collapsed'}
        animate={isExpanded ? 'opened' : 'closed'}
        // TODO: variants={menuMotion}
      >
        <NavItem href="/" text="Home" />
        <NavItem href="/projects" text="Projects" />
        <NavItem href="/blog" text="Blog" />
        <NavItem href="/guestbook" text="Guestbook" />
        <NavItem href={resumeLink} text="Resume" newTab />
      </Menu>
      <ThemeBox>
        <FontAwesomeIcon icon={faMoon} style={moonStyles} />
      </ThemeBox>
    </NavbarDiv>
  );
}

interface INavItem {
  href: string;
  text: string;
  newTab?: boolean;
}

function NavItem({ href, text, newTab }: INavItem) {
  const router = useRouter();
  return (
    <Button className="nav-item">
      <ButtonText isActive={router.asPath === href}>
        <Link href={href} target={newTab ? '_blank' : '_self'}>
          {text}
        </Link>
      </ButtonText>
    </Button>
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
  padding: 0;
  background-color: transparent;
  display: none;

  @media (${small}) {
    display: inline;
  }
`;

const Menu = styled(motion.div)`
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

const Button = styled(motion.button)`
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
  'https://docs.google.com/document/d/1jtBQaUDuxlsMYy27LhJeqUmIQcbbzVReoLEOY9zM5hE/';
