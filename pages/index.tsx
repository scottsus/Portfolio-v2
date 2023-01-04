import React, { useState } from 'react';
import TypedStrings from '../components/TypedStrings';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import CodeSnippet from '../components/CodeSnippet';
import { tsCode, goCode, javaCode } from '../lib/codeSnippets';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HandWave from '../components/HandWave';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Mailchimp, { EmailFormFields } from 'react-mailchimp-subscribe';
import {
  HomePageDiv,
  Hero,
  TitleAndSubtitle,
  Title,
  Subtitle,
  typedSubtitles,
  About,
  Terminal,
  TerminalCode,
  AboutText,
  Experiences,
  SectionHeading,
  CompanyLogos,
  CodeSnippetContainer,
  Languages,
  SubscribeContainer,
  TextArea,
  OrElse,
  TimingText,
  EmailForm,
  InputBar,
  SubmitButton,
  ConsiderText,
  Socials,
  SocialsRow,
} from '../styles/indexStyles';

export default function HomePage() {
  return (
    <HomePageDiv>
      <Navbar />
      <Hero>
        <TitleAndSubtitle>
          <Title>Scott Susanto</Title>
          <Subtitle>
            I am
            <TypedStrings id='typed-subtitle' strings={typedSubtitles} loop />
          </Subtitle>
        </TitleAndSubtitle>
        <Image
          id='profilePicture'
          src='/imgs/DP.png'
          width={210}
          height={245}
          alt='Handsome Lad'
        />
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
            <TypedStrings id='typed-whoami' strings={['whoami?']} speed={300} />
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
        <SectionHeading margin='0 0 40px' isBlack>
          Prev SDE @
        </SectionHeading>
        <CompanyLogos>
          <Image
            className='longLogo'
            src='/imgs/companies/Amazon.png'
            width={240}
            height={80}
            alt='Amazon'
          />
          <Image
            className='shortLogo'
            src='/imgs/companies/CarbonLink.png'
            width={80}
            height={80}
            alt='CarbonLink'
          />
          <ParallaxProvider>
            <Parallax rotate={[0, 360]}>
              <Image
                className='shortLogo'
                src='/imgs/companies/Sourcegraph.png'
                width={80}
                height={80}
                alt='Sourcegraph'
              />
            </Parallax>
          </ParallaxProvider>
          <Image
            className='longLogo'
            src='/imgs/companies/Snap-Fitness.png'
            width={240}
            height={80}
            alt='Snap Fitness'
          />
        </CompanyLogos>
      </Experiences>
      <Languages>
        <SectionHeading margin='15px 0 55px'>
          I&apos;m multilingual since birth. I speak native English, TypeScript,
          Go, Java...
        </SectionHeading>
        <CodeSnippetContainer className='noScroll'>
          <CodeSnippet
            id='typed-typescript'
            text={[tsCode]}
            speed={5}
            width={550}
          />
          <CodeSnippet
            id='typed-golang'
            text={[goCode]}
            speed={8}
            width={650}
          />
          <CodeSnippet
            id='typed-java'
            text={[javaCode]}
            speed={4}
            width={650}
          />
        </CodeSnippetContainer>
      </Languages>
      <SectionHeading margin='45px 0 45px 20px' textAlign='left'>
        May our paths cross again...
      </SectionHeading>
      <SubscribeContainer>
        <Image
          id='newsletter'
          src='/imgs/Newsletter.png'
          width={300}
          height={300}
          alt='Newsletter Robot'
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
          <Mailchimp
            url={mailChimpURL}
            render={(props) => {
              return <NewsLetterForm subscribe={props.subscribe} />;
            }}
          />
          <ConsiderText>
            <HandWave />
            Consider subscribing and let&apos;s change the world together!
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
    </HomePageDiv>
  );
}

const mailChimpURL = process.env.NEXT_PUBLIC_MAILCHIMP_URL || '';

interface INewsLetterForm {
  subscribe: (data: EmailFormFields) => void;
}

function NewsLetterForm({ subscribe }: INewsLetterForm) {
  return (
    <EmailForm
      onSubmit={(event) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
          email: { value: string };
        };
        const email = target.email.value;
        subscribe({ EMAIL: email });
      }}
    >
      <InputBar name='email' type='text' placeholder='brucewayne@batman.com' />
      <SubmitButton type='submit'>
        <FontAwesomeIcon
          icon={faPaperPlane}
          style={{ fontSize: '18px', color: '#222632' }}
        />
      </SubmitButton>
    </EmailForm>
  );
}
