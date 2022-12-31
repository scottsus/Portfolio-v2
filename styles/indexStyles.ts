import styled from 'styled-components';
import { small, medium } from './responsive';

export const HomePageDiv = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${small}) {
    width: 90%;
    margin: 0 auto;
    overflow-x: hidden;
  }
`;

export const Hero = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (${small}) {
    flex-direction: column-reverse;
    margin-top: 20px;
    text-align: center;
    #profilePicture {
      margin: 10px 0 30px;
    }
  }
`;

export const TitleAndSubtitle = styled.div`
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  font-size: 65px;
  font-family: Kamerik, Arial;
  margin: 10px 0px 20px;

  @media (${small}) {
    font-size: 40px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 37px;
  font-family: Kamerik, Arial;
  font-weight: 400;
  margin: 0 0 30px 0;

  @media (${small}) {
    font-size: 20px;
  }
`;

export const typedSubtitles = [
  `<span id='typed-subtitle'> a technical cofounder</span id='typed-subtitle>`,
  `<span id='typed-subtitle'> a software engineer</span id='typed-subtitle'>`,
  `<span id='typed-subtitle'> an aspiring entrepreneur</span id='typed-subtitle'>`,
];

export const About = styled.section`
  width: 100%;
  height: 360px;
  border-radius: 20px;
  background-color: #222632;
  margin: 35px auto 0;
  padding: 25px 35px;

  @media (${small}) {
    height: 100%;
    padding: 20px 25px;
  }
`;

export const Terminal = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media (${small}) {
    margin-bottom: 10px;
  }
`;

export const TerminalCode = styled.p`
  font-size: 32px;
  font-family: SourceCodePro;
  font-weight: 400;
  color: #89f398;
  margin: 0 0 0 20px;
  font-size: 24px;
`;

export const AboutText = styled.p`
  font-size: 21px;
  font-family: Kamerik;
  font-weight: 400;
  margin: 20px 0;

  @media (${small}) {
    font-size: 16px;
  }
`;

export const Experiences = styled.section`
  width: 100%;
  height: 200px;
  margin: 50px auto;

  @media (${small}) {
    margin: 20px 0;
    height: 100%;
  }
`;

interface ISectionHeading {
  margin: string;
  textAlign?: string;
}

export const SectionHeading = styled.h2<ISectionHeading>`
  width: 100%;
  font-size: 32px;
  font-family: Articulat, Arial;
  font-weight: 700;
  margin: ${(props) => props.margin};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};

  @media (${small}) {
    font-size: 24px;
    font-weight: 600;
    margin: 20px 0;
  }
`;

export const CompanyLogos = styled.div`
  width: 880px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (${small}) {
    width: 80%;
    height: 100%;
    margin-top: 50px;
    align-items: center;
    flex-wrap: wrap;
    .longLogo {
      width: 300px;
      height: 80px;
    }
    .shortLogo {
      width: 90px;
      height: 80px;
      margin: 40px auto;
    }
  }
`;

export const Languages = styled.section`
  width: 100%;
  min-height: 300px;
  border-radius: 15px;
  margin: 35px auto 60px;

  @media (${small}) {
    margin: 35px auto;
  }
`;

export const CodeSnippetContainer = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  overflow-x: scroll;

  @media (${small}) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    overflow-x: hidden;
  }
`;

export const SubscribeContainer = styled.section`
  max-width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #222632;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 40px;

  @media (${small}) {
    max-width: 100%;
    border-radius: 10px;
    flex-direction: column;
    padding: 20px 20px 30px;
    #newsletter {
      margin: 0 auto 20px;
    }
  }
`;

export const TextArea = styled.div`
  width: 530px;
  margin: 0 10px 0 auto;

  @media (${small}) {
    width: 100%;
  }
`;

export const OrElse = styled.h2`
  font-size: 24px;
  font-family: Kamerik, Arial;
  font-weight: 700;

  @media (${small}) {
    font-size: 16px;
  }
`;

export const TimingText = styled.p`
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

  @media (${small}) {
    font-size: 14px;
  }
`;

export const EmailForm = styled.form`
  width: 350px;
  height: 30px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  background-color: #ffffff;
  margin: 15px 0 15px 18px;
  padding: 0 3px;

  @media (${small}) {
    width: 75%;
  }
`;

export const InputBar = styled.input`
  width: 310px;
  height: 30px;
  background-color: transparent;
  padding: 0 10px;
`;

export const SubmitButton = styled.button`
  width: 40px;
  height: 26px;
  border-radius: 5px;
  background-color: #758ad3;
`;

export const ConsiderText = styled.p`
  font-size: 20px;
  font-family: Articulat, Arial;
  font-weight: 400;

  @media (${small}) {
    font-size: 16px;
  }
`;

export const Socials = styled.section`
  width: 215px;
  height: 95px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (${small}) {
    margin: 50px auto;
  }
`;

interface ISocialsRow {
  width: number;
}

export const SocialsRow = styled.div<ISocialsRow>`
  width: ${(props) => props.width}%;
  height: 35px;
  display: flex;
  justify-content: space-between;
`;
