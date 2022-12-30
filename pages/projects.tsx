import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { Title, Subtitle } from '../components/TypicalPage';
import Image from 'next/image';
import { faCalendar, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <Title>Personal Projects</Title>
      <Subtitle style={{ marginBottom: '100px' }}>
        🚀 Interning in prestigious companies is cool and all, but what about
        innovating a scrappy invention entirely from scratch? For that, check
        out some of my featured personal projects! 📽️
      </Subtitle>
      <SpotlightContainer>
        <Image
          src='/imgs/projects/Spotlight-Imgs.png'
          width={500}
          height={300}
          alt='Phone and Laptop'
          style={{ marginLeft: '40px' }}
        />
        <TextArea width={340} height={255} margin='10px 60px 0 auto'>
          <ProjectTitle>Spotlight</ProjectTitle>
          <ProjectText>
            Think Expedia.com for concert and sports tickets in the U.S., but in
            the form of a chrome extension that automatically runs on checkout.
          </ProjectText>
          <Links>
            <ProjectLink>
              <Link
                href='https://github.com/susantoscott/spotlight/'
                target='_blank'
              >
                GitHub
              </Link>
            </ProjectLink>
            <ProjectLink>
              <Link
                href='https://www.figma.com/proto/CChEEnXpwmq3wLzM9r3t9I/Spotlight-Pitch-Deck?node-id=773%3A402&scaling=scale-down&page-id=773%3A313&starting-point-node-id=773%3A402'
                target='_blank'
              >
                Pitch Deck
              </Link>
            </ProjectLink>
          </Links>
        </TextArea>
      </SpotlightContainer>
      <HiPattyContainer>
        <TextArea width={370} height={210} margin='0 0 0 80px'>
          <ProjectTitle>Hi Patty</ProjectTitle>
          <ProjectText>
            A simple website to log 1 - 3 appreciations of the day to remind me
            to be grateful to my girlfriend
          </ProjectText>
          <ProjectLink style={{ marginLeft: '35px' }}>
            <Link
              href='https://github.com/susantoscott/Hi-Patty'
              target='_blank'
            >
              GitHub
            </Link>
          </ProjectLink>
        </TextArea>
        <Image
          src='/imgs/projects/Hi-Patty-Img.png'
          width={500}
          height={325}
          alt='StoryBook Browser'
          style={{
            position: 'absolute',
            top: '810px',
            left: '770px',
            borderRadius: '20px',
          }}
        />
      </HiPattyContainer>
      <ASLContainer>
        <Image
          src='/imgs/projects/ASL-Img.png'
          width={540}
          height={340}
          alt='ASL to Text Render'
          style={{ position: 'absolute', top: '1200px', left: '100px' }}
        />
        <TextArea width={400} height={250} margin='0 100px 0 auto' hasBlackText>
          <ProjectTitle>ASL to Text Bot</ProjectTitle>
          <ProjectText>
            A machine that captures an ASL hand sign and converts it into a
            char, building a string used for communication with people
            unfamiliar with ASL. Built using GrovePi.
          </ProjectText>
          <ProjectLink style={{ marginLeft: '35px' }}>
            <Link
              href='https://github.com/susantoscott/ASL-to-Text'
              target='_blank'
            >
              GitHub
            </Link>
          </ProjectLink>
        </TextArea>
      </ASLContainer>
      <YelpCampContainer>
        <TextArea width={345} height={215} margin='0 auto 0 60px' hasBlackText>
          <ProjectTitle>YelpCamp</ProjectTitle>
          <ProjectText>
            Yelp but for camping grounds across the U.S. MongoDB, Express, EJS,
            Node.
          </ProjectText>
          <Links>
            <ProjectLink>
              <Link
                href='https://github.com/susantoscott/YelpCamp'
                target='_blank'
              >
                GitHub
              </Link>
            </ProjectLink>
            <ProjectLink>
              <Link
                href='http://stormy-savannah-38066.herokuapp.com/'
                target='_blank'
              >
                Website
              </Link>
            </ProjectLink>
          </Links>
        </TextArea>
        <Image
          src='/imgs/projects/Yelp-Img.png'
          width={480}
          height={280}
          alt='YelpCamp Home Page'
          style={{ position: 'absolute', top: '1710px', left: '680px' }}
        />
      </YelpCampContainer>
      <CTA>
        <Image src='/imgs/Robot.png' height={330} width={330} alt='Robot' />
        <CTAText>
          <Cofounder>Be my cofounder for the next tech unicorn 🦄</Cofounder>
          <Social>
            📆 Pick a time on my{' '}
            <Link
              href='https://calendly.com/scottsus'
              style={{ color: '#2951df' }}
            >
              Calendly
            </Link>
          </Social>
          <Social>
            📫 Reach out to my{' '}
            <Link href='mailto::scottsus@usc.edu' style={{ color: '#2951df' }}>
              GMail
            </Link>
          </Social>
        </CTAText>
      </CTA>
    </>
  );
}

const projectSkeleton = `
    width: 980px;
    height: 340px;
    border-radius: 30px;
    margin-bottom: 85px;
    display: flex;
    align-items: center;
`;

const SpotlightContainer = styled.div`
  ${projectSkeleton}
  background: linear-gradient(101.52deg, #9019F2 -3.55%, #4D78FC 103.61%);
`;

const HiPattyContainer = styled.div`
  ${projectSkeleton}
  background: linear-gradient(101.52deg, #FF3263 -3.55%, #AF4DFC 103.61%);
`;

const ASLContainer = styled.div`
  ${projectSkeleton}
  background: linear-gradient(101.52deg, #F28119 -3.55%, #E4FC4D 103.61%);
`;

const YelpCampContainer = styled.div`
  ${projectSkeleton}
  background: linear-gradient(101.52deg, #45EE75 -3.55%, #4D5FFC 103.61%);
`;

interface ITextArea {
  height: number;
  width: number;
  margin?: string;
  hasBlackText?: boolean;
}

const TextArea = styled.div<ITextArea>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => (props.hasBlackText ? '#202020' : '#ffffff')} !important;
  margin: ${(props) => props.margin};
`;

const ProjectTitle = styled.h2`
  font-size: 40px;
  font-family: Kamerik, Arial;
  font-weight: 700;
`;

const ProjectText = styled.p`
  font-size: 21px;
  font-family: Articulat, Arial;
  font-weight: 400;
  margin: 40px 0;
`;

const Links = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

const ProjectLink = styled.p`
  font-size: 21px;
  font-family: Articulat, Arial;
  font-weight: 400;
  text-decoration: underline;
`;

const CTA = styled.div`
  width: 85%;
  height: 330px;
  margin: 20px auto 60px;
  display: flex;
  align-items: center;
`;

const CTAText = styled.div`
  width: 650px;
  height: 330px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cofounder = styled.h3`
  font-size: 30px;
  font-family: Kamerik, Arial;
  font-weight: 700;
  text-align: center;
  margin: 75px auto 35px;
`;

const Social = styled.p`
  font-size: 24px;
  font-family: Articulat, Arial;
  font-weight: 400;
  text-align: left;
  width: 330px;
  margin: 0 auto 5px;
`;
