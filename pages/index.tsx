import React from 'react';
import styled from 'styled-components';
import TypedStrings from '../components/TypedStrings';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import CodeSnippet from '../components/CodeSnippet';
import { tsCode, goCode, javaCode } from '../lib/codeSnippets';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HandWave from '../components/HandWave';

export default function HomePage() {
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
        <SectionHeading margin='45px 0 40px'>Prev SDE @</SectionHeading>
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
        <SectionHeading margin='75px 0 55px'>
          I&apos;m multilingual since birth. I speak native English, TypeScript,
          Go, Java...
        </SectionHeading>
        <CodeSnippetContainer>
          <CodeSnippet id='typed-typescript' text={[tsCode]} speed={5} />
          <CodeSnippet id='typed-go' text={[goCode]} speed={8} width={600} />
          <CodeSnippet
            id='typed-java'
            text={[javaCode]}
            speed={4}
            width={600}
          />
        </CodeSnippetContainer>
      </Languages>
      <SectionHeading margin='45px 0 45px 20px' textAlign='left'>
        May our paths cross again...
      </SectionHeading>
      <SubscribeContainer>
        <Image
          src='/imgs/Newsletter.png'
          width={300}
          height={300}
          alt='Newsletter Robot'
          style={{ marginLeft: '30px' }}
        />
        <TextArea>
          <OrElse>Subscribe to my newsletter, or else...</OrElse>
          <TimingText>
            I was born <br />
            &emsp;too <span id='red'>late</span> to explore the world, <br />
            &emsp;too <span id='yellow'>early</span> to explore the galaxy,
            <br />
            &emsp;but <span id='green'>just in time</span> to write these weekly
            newsletters.
          </TimingText>
          <EmailForm>
            <InputBar type='text' placeholder='brucewayne@batman.com' />
            <SubmitButton>
              <FontAwesomeIcon
                icon={faPaperPlane}
                style={{ fontSize: '18px', color: '#222632' }}
              />
            </SubmitButton>
          </EmailForm>
          <ConsiderText>
            <HandWave /> Consider subscribing and let&apos;s change the world
            together!
          </ConsiderText>
        </TextArea>
      </SubscribeContainer>
      <Socials>
        <SocialsRow width={100}>
          <Link href='https://www.instagram.com/scottsusanto/' target='_blank'>
            <Image
              src='/imgs/icons/Instagram.png'
              width={35}
              height={35}
              alt='Instagram'
            />
          </Link>
          <Link href='https://www.twitter.com/susantoscott' target='_blank'>
            <Image
              src='/imgs/icons/Twitter.png'
              width={34}
              height={28}
              alt='Twitter'
            />
          </Link>
          <Link href='https://github.com/susantoscott' target='_blank'>
            <Image
              src='/imgs/icons/GitHub.png'
              width={36}
              height={35}
              alt='GitHub'
            />
          </Link>
          <Link href='https://linkedin.com/in/susantoscott' target='_blank'>
            <Image
              src='/imgs/icons/LinkedIn.png'
              width={35}
              height={35}
              alt='LinkedIn'
            />
          </Link>
        </SocialsRow>
        <SocialsRow width={45}>
          <Link href='https://calendly.com/scottsus' target='_blank'>
            <Image
              src='/imgs/icons/Calendar.png'
              width={35}
              height={35}
              alt='Calendar'
            />
          </Link>
          <Link href='mailto::scottsus@usc.edu'>
            <Image
              src='/imgs/icons/Google.png'
              width={35}
              height={35}
              alt='Google'
            />
          </Link>
        </SocialsRow>
      </Socials>
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

interface ISectionHeading {
  margin: string;
  textAlign?: string;
}

const SectionHeading = styled.h2<ISectionHeading>`
  width: 100%;
  font-size: 32px;
  font-family: Articulat, Arial;
  font-weight: 700;
  margin: ${(props) => props.margin};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
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
  margin: 35px auto 120px;
`;

const CodeSnippetContainer = styled.div`
  height: 650px;
  width: 1000px;
  display: flex;
  overflow-y: scroll;
`;

const SubscribeContainer = styled.section`
  max-width: 1000px;
  height: 340px;
  border-radius: 20px;
  background-color: #222632;
  display: flex;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 40px;
`;

const TextArea = styled.div`
  width: 540px;
  margin: 0 45px 0 auto;
`;

const OrElse = styled.div`
  font-size: 24px;
  font-family: Kamerik, Arial;
  font-weight: 700;
`;

const TimingText = styled.p`
  font-size: 18px;
  font-family: Articulat, Arial;
  font-weight: 400;
  margin: 15px 0 0;
  line-height: 1.4;

  #red {
    color: #f16a6a;
  }

  #yellow {
    color: #f2e357;
  }

  #green {
    color: #88e986;
  }
`;

const EmailForm = styled.form`
  width: 350px;
  height: 30px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  background-color: #ffffff;
  margin: 15px 0 15px 18px;
  padding: 0 3px;
`;

const InputBar = styled.input`
  width: 310px;
  height: 30px;
  background-color: transparent;
  padding: 0 10px;
`;

const SubmitButton = styled.button`
  width: 40px;
  height: 26px;
  border-radius: 5px;
  background-color: #758ad3;
`;

const ConsiderText = styled.p`
  font-size: 20px;
  font-family: Articulat, Arial;
  font-weight: 400;
`;

const Socials = styled.section`
  width: 215px;
  height: 95px;
  margin: 120px auto 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

interface ISocialsRow {
  width: number;
}

const SocialsRow = styled.div<ISocialsRow>`
  width: ${(props) => props.width}%;
  height: 35px;
  display: flex;
  justify-content: space-between;
`;
