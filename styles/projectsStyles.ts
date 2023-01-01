import styled from 'styled-components';
import { small, medium } from './responsive';

export const ProjectsDiv = styled.section`
  width: 100%;
  margin: 0 auto;

  @media (${small}) {
    width: 90%;
    margin: 0 auto;
    overflow-x: hidden;
  }
`;

export const projectSkeleton = `
  width: 100%;
  height: 340px;
  border-radius: 30px;
  margin-bottom: 85px;
  display: flex;
  align-items: center;

  @media (${small}) {
    height: 100%;
    border-radius: 20px;
    padding: 5px 10px;
  }
`;

export const SpotlightContainer = styled.div`
  ${projectSkeleton}
  margin-top: 100px;
  background: linear-gradient(101.52deg, #9019f2 -3.55%, #4d78fc 103.61%);
  #spotlight-imgs {
    margin-left: 40px;
  }
  @media (${small}) {
    margin-top: 50px;
    flex-direction: column-reverse;
    #spotlight-imgs {
      margin: 20px auto;
    }
  }
`;

export const HiPattyContainer = styled.div`
  ${projectSkeleton}
  background: linear-gradient(101.52deg, #FF3263 -3.55%, #AF4DFC 103.61%);
  #hi-patty-img {
    border-radius: 20px;
    margin: -40px -30px auto auto;
  }
  @media (${small}) {
    flex-direction: column;
    #hi-patty-img {
      width: 320px;
      height: 220px;
      margin: 10px 0;
    }
  }
`;

export const ASLContainer = styled.div`
  ${projectSkeleton}
  background: linear-gradient(101.52deg, #F28119 -3.55%, #E4FC4D 103.61%);
  #asl-img {
    margin: -30px auto auto -150px;
  }
  @media (${small}) {
    flex-direction: column-reverse;
    #asl-img {
      width: 320px;
      height: 220px;
      margin: 10px 0;
    }
  }
`;

export const YelpCampContainer = styled.div`
  ${projectSkeleton}
  background: linear-gradient(101.52deg, #45EE75 -3.55%, #4D5FFC 103.61%);
  #yelp-img {
    margin-right: 40px;
    border-radius: 10px;
  }
  @media (${small}) {
    flex-direction: column;
    #yelp-img {
      width: 320px;
      height: 220px;
      margin: auto 0 20px;
    }
  }
`;

interface ITextArea {
  height: number;
  width: number;
  margin?: string;
  hasBlackText?: boolean;
}

export const TextArea = styled.div<ITextArea>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  color: ${(props) => (props.hasBlackText ? '#202020' : '#ffffff')} !important;
  margin: ${(props) => props.margin};

  @media (${small}) {
    width: 90%;
    margin: 20px auto;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 40px;
  font-family: Kamerik, Arial;
  font-weight: 700;

  @media (${small}) {
    font-size: 32px;
  }
`;

export const ProjectText = styled.p`
  font-size: 21px;
  font-family: Articulat, Arial;
  font-weight: 400;
  margin: 40px 0;

  @media (${small}) {
    margin: 20px 0;
  }
`;

export const Links = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;

  @media (${small}) {
    margin: 0 auto;
  }
`;

export const ProjectLink = styled.p`
  font-size: 21px;
  font-family: Articulat, Arial;
  font-weight: 400;
  text-decoration: underline;

  @media (${small}) {
    text-align: center;
  }
`;

export const CTA = styled.div`
  width: 85%;
  height: 330px;
  margin: 20px auto 60px;
  display: flex;
  align-items: center;

  @media (${small}) {
    flex-direction: column;
    height: 100%;
    margin: 0 auto 20px;
  }
`;

export const CTAText = styled.div`
  width: 650px;
  height: 330px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${small}) {
    width: 100%;
  }
`;

export const Cofounder = styled.h3`
  font-size: 30px;
  font-family: Kamerik, Arial;
  font-weight: 700;
  text-align: center;
  margin: 75px auto 35px;

  @media (${small}) {
    margin: 50px auto 40px;
  }
`;

export const Social = styled.p`
  font-size: 24px;
  font-family: Articulat, Arial;
  font-weight: 400;
  text-align: left;
  width: 330px;
  margin: 0 auto 5px;

  @media (${small}) {
    font-size: 21px;
  }
`;
