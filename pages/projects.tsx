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
      <SpotlightContainer></SpotlightContainer>
      <HiPattyContainer></HiPattyContainer>
      <ASLContainer></ASLContainer>
      <YelpCampContainer></YelpCampContainer>
      <CTA>
        <Image src='/imgs/robot.png' height={330} width={370} alt='Robot' />
      </CTA>
    </>
  );
}

const projectSkeleton = `
    width: 980px;
    height: 340px;
    border-radius: 30px;
    margin-bottom: 85px;
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

const CTA = styled.div`
  width: 80%;
  height: 330px;
`;
