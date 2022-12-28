import React from 'react';
import styled from 'styled-components';
import TypedStrings from '../components/TypedStrings';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero>
        <TitleAndSubtitle>
          <Title>Scott Susanto</Title>
          <Subtitle>
            I am
            <TypedStrings strings={typedStrings} />
          </Subtitle>
        </TitleAndSubtitle>
        <Image src='/imgs/DP.png' height={255} width={220} alt='Handsome Lad' />
      </Hero>
      <About></About>
    </>
  );
}

const Hero = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TitleAndSubtitle = styled.div`
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  font-size: 80px;
  font-family: Kamerik, Arial;
  margin: 20px 0px;
`;

const Subtitle = styled.h2`
  font-size: 40px;
  font-family: Kamerik, Arial;
  font-weight: 400;
  margin: 0 0 30px 0;
`;

const typedStrings = [
  `<span id='typed-subtitle'> the technical cofounder</span id='typed-subtitle>`,
  `<span id='typed-subtitle'> a software engineer</span id='typed-subtitle'>`,
  `<span id='typed-subtitle'> an aspiring entrepreneur</span id='typed-subtitle'>`,
];

const About = styled.section`
  width: 1000px;
  height: 360px;
  border-radius: 20px;
  background-color: #222632;
  margin: 35px auto;
`;
