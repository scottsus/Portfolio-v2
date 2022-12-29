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
            <TypedStrings id='typed-subtitle' strings={typedStrings} loop />
          </Subtitle>
        </TitleAndSubtitle>
        <Image src='/imgs/DP.png' height={255} width={220} alt='Handsome Lad' />
      </Hero>
      <About>
        <Terminal>
          <Image
            src='imgs/Arrow.svg'
            height={47}
            width={125}
            alt='Terminal Arrow'
          />
          <Code>
            <TypedStrings id='typed-whoami' strings={['whoami?']} speed={200} />
          </Code>
        </Terminal>
        <AboutText>
          🚀 Lorem ipsum dolor, sit amet consectetur adipisicing elit. 🔮
          Voluptate voluptatibus aliquam aperiam est corrupti fugiat, voluptas
          rerum excepturi sint in non quae cum fuga! Blanditiis dolor maiores
          veritatis consequuntur nisi! ❄️
        </AboutText>
        <AboutText>
          ✈️ Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
          ab esse sint veniam deserunt tempore error earum ipsa magnam sapiente
          autem expedita provident rerum beatae quo maxime quibusdam aut
          tenetur. 🔭
        </AboutText>
      </About>
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
  max-width: 100%;
  height: 360px;
  border-radius: 20px;
  background-color: #222632;
  margin: 35px auto;
  padding: 45px 55px;
`;

const Terminal = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Code = styled.p`
  font-size: 32px;
  font-family: SourceCodePro;
  font-weight: 400;
  color: #89f398;
  margin: 0 0 0 20px;
`;

const AboutText = styled.p`
  font-size: 24px;
  font-family: Kamerik;
  font-weight: 400;
`;
