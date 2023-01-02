import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { Title, Subtitle } from '../components/TypicalPage';
import {
  ProjectsDiv,
  SpotlightContainer,
  TextArea,
  ProjectTitle,
  ProjectText,
  Links,
  ProjectLink,
  HiPattyContainer,
  ASLContainer,
  YelpCampContainer,
  CTA,
  CTAText,
  Cofounder,
  Social,
} from '../styles/projectsStyles';

export default function ProjectsPage() {
  // TODO: Add motions
  return (
    <ProjectsDiv>
      <Navbar />
      <Title>Personal Projects</Title>
      <Subtitle>
        🚀 Interning in prestigious companies is cool and all, but what about
        innovating a scrappy invention entirely from scratch? For that, check
        out some of my featured personal projects! 📽️
      </Subtitle>
      <SpotlightContainer>
        <Image
          id='spotlight-imgs'
          src='/imgs/projects/Spotlight-Imgs.png'
          width={400}
          height={300}
          alt='Phone and Laptop'
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
          <ProjectLink>
            <Link
              href='https://github.com/susantoscott/Hi-Patty'
              target='_blank'
            >
              GitHub
            </Link>
          </ProjectLink>
        </TextArea>
        <Image
          id='hi-patty-img'
          src='/imgs/projects/Hi-Patty-Img.png'
          width={500}
          height={325}
          alt='StoryBook Browser'
        />
      </HiPattyContainer>
      <ASLContainer>
        <Image
          id='asl-img'
          src='/imgs/projects/ASL-Img.png'
          width={540}
          height={340}
          alt='ASL to Text Render'
        />
        <TextArea width={400} height={250} margin='0 50px 0 auto' hasBlackText>
          <ProjectTitle>ASL to Text Bot</ProjectTitle>
          <ProjectText>
            A machine that captures an ASL hand sign and converts it into a
            char, building a string used for communication with people
            unfamiliar with ASL. Built using GrovePi.
          </ProjectText>
          <ProjectLink>
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
          id='yelp-img'
          src='/imgs/projects/Yelp-Img.png'
          width={480}
          height={280}
          alt='YelpCamp Home Page'
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
    </ProjectsDiv>
  );
}
