import React, { useRef } from 'react';
import styled from 'styled-components';
import TypedStrings from '../components/TypedStrings';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import CodeSnippet from '../components/CodeSnippet';
import { tsCode, goCode, javaCode } from '../lib/codeSnippets';

export default function HomePage() {
  const componentRef = useRef(null);
  return (
    <>
      <Navbar />
      <Hero>
        <TitleAndSubtitle>
          <Title>Scott Susanto</Title>
          <Subtitle>
            I am
            <TypedStrings id='typed-subtitle' strings={typedSubtitles} loop />
          </Subtitle>
        </TitleAndSubtitle>
        <Image src='/imgs/DP.png' width={220} height={255} alt='Handsome Lad' />
      </Hero>
      <About>
        <Terminal>
          <Image
            src='imgs/Arrow.svg'
            width={125}
            height={47}
            alt='Terminal Arrow'
          />
          <TerminalCode>
            <TypedStrings id='typed-whoami' strings={['whoami?']} />
          </TerminalCode>
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
      <Experiences>
        <SectionHeading>Prev SDE @</SectionHeading>
        <CompanyLogos>
          <Image
            src='/imgs/companies/Amazon.png'
            width={122}
            height={90}
            alt='Amazon'
          />
          <Image
            src='/imgs/companies/CarbonLink.png'
            width={92}
            height={90}
            alt='CarbonLink'
          />
          <Image
            src='/imgs/companies/Sourcegraph.png'
            width={89}
            height={90}
            alt='Sourcegraph'
          />
          <Image
            src='/imgs/companies/Snap-Fitness.png'
            width={268}
            height={90}
            alt='Snap Fitness'
          />
        </CompanyLogos>
      </Experiences>
      <Languages>
        <SectionHeading>
          I&apos;m multilingual since birth. I speak native English, TypeScript,
          Go, Java...
        </SectionHeading>
        <CodeSnippetContainer>
          <CodeSnippet id='typed-typescript' text={[tsCode]} speed={5} />
          <CodeSnippet id='typed-go' text={[tsCode]} speed={8} />
          <CodeSnippet
            id='typed-java'
            text={[javaCode]}
            speed={4}
            width={600}
          />
        </CodeSnippetContainer>
      </Languages>
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

const typedSubtitles = [
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

const TerminalCode = styled.p`
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

const Experiences = styled.section`
  width: 100%;
  height: 200px;
  margin: 70px auto;
`;

const SectionHeading = styled.h2`
  width: 100%;
  font-size: 32px;
  font-family: Articulat, Arial;
  font-weight: 700;
  margin: 0 auto 55px;
  text-align: center;
`;

const CompanyLogos = styled.div`
  width: 880px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Languages = styled.section`
  width: 100%;
  height: 650px;
  border-radius: 15px;
  margin: 35px auto;
`;

const CodeSnippetContainer = styled.div`
  height: 650px;
  width: 1000px;
  display: flex;
  overflow-y: scroll;
`;
