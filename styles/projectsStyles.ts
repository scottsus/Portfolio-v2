import styled from 'styled-components';

export const ProjectsDiv = styled.section`
  width: 100%;
  height: 100%;
`;

export const projectSkeleton = `
  width: 100%;
  height: 340px;
  border-radius: 30px;
  margin-bottom: 85px;
  display: flex;
  align-items: center;
`;

export const SpotlightContainer = styled.div`
  ${projectSkeleton}
  background: linear-gradient(101.52deg, #9019F2 -3.55%, #4D78FC 103.61%);
`;

export const HiPattyContainer = styled.div`
  ${projectSkeleton}
  background: linear-gradient(101.52deg, #FF3263 -3.55%, #AF4DFC 103.61%);
`;

export const ASLContainer = styled.div`
  ${projectSkeleton}
  background: linear-gradient(101.52deg, #F28119 -3.55%, #E4FC4D 103.61%);
`;

export const YelpCampContainer = styled.div`
  ${projectSkeleton}
  background: linear-gradient(101.52deg, #45EE75 -3.55%, #4D5FFC 103.61%);
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
`;

export const ProjectTitle = styled.h2`
  font-size: 40px;
  font-family: Kamerik, Arial;
  font-weight: 700;
`;

export const ProjectText = styled.p`
  font-size: 21px;
  font-family: Articulat, Arial;
  font-weight: 400;
  margin: 40px 0;
`;

export const Links = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

export const ProjectLink = styled.p`
  font-size: 21px;
  font-family: Articulat, Arial;
  font-weight: 400;
  text-decoration: underline;
`;

export const CTA = styled.div`
  width: 85%;
  height: 330px;
  margin: 20px auto 60px;
  display: flex;
  align-items: center;
`;

export const CTAText = styled.div`
  width: 650px;
  height: 330px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Cofounder = styled.h3`
  font-size: 30px;
  font-family: Kamerik, Arial;
  font-weight: 700;
  text-align: center;
  margin: 75px auto 35px;
`;

export const Social = styled.p`
  font-size: 24px;
  font-family: Articulat, Arial;
  font-weight: 400;
  text-align: left;
  width: 330px;
  margin: 0 auto 5px;
`;
