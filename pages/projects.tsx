import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { Title, Subtitle } from '../components/TypicalPage';
import Image from 'next/image';

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
          src='/imgs/Spotlight-Imgs.png'
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
            <ProjectLink>GitHub</ProjectLink>
            <ProjectLink>Pitch Deck</ProjectLink>
          </Links>
        </TextArea>
      </SpotlightContainer>
      <HiPattyContainer>
        <TextArea width={260} height={210}>
          <ProjectTitle>Hi Patty</ProjectTitle>
          <ProjectText>
            A simple website to log 1 - 3 appreciations of the day to remind me
            to be grateful to my girlfriend
          </ProjectText>
          <ProjectLink style={{ marginLeft: '35px' }}>GitHub</ProjectLink>
        </TextArea>
        <Image
          src='/imgs/Hi-Patty-Img.png'
          width={550}
          height={400}
          alt='StoryBook Browser'
        />
      </HiPattyContainer>
      <ASLContainer>
        <TextArea width={370} height={230} hasBlackText>
          <ProjectTitle>ASL to Text Bot</ProjectTitle>
          <ProjectText>
            A machine that captures an ASL hand sign and converts it into a
            char, building a string used for communication with people
            unfamiliar with ASL. Built using GrovePi.
          </ProjectText>
          <ProjectLink style={{ marginLeft: '35px' }}>GitHub</ProjectLink>
        </TextArea>
      </ASLContainer>
      <YelpCampContainer>
        <TextArea width={345} height={205} hasBlackText>
          <ProjectTitle>YelpCamp</ProjectTitle>
          <ProjectText>
            Yelp but for camping grounds across the U.S. MongoDB, Express, EJS,
            Node.
          </ProjectText>
          <Links>
            <ProjectLink>GitHub</ProjectLink>
            <ProjectLink>Pitch Deck</ProjectLink>
          </Links>
        </TextArea>
      </YelpCampContainer>
      <CTA>
        <Image src='/imgs/Robot.png' height={330} width={370} alt='Robot' />
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
  width: 80%;
  height: 330px;
`;
