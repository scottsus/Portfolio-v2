import styled from 'styled-components';
import { small, medium } from './responsive';

export const GuestbookDiv = styled.div``;

export const MessageBox = styled.div`
  width: 85%;
  height: 175px;
  border-radius: 10px;
  background-color: #222632;
  margin: 35px auto;
  padding: 20px 36px;

  @media (${small}) {
    height: 100%;
    padding: 20px;
  }
`;

export const Lend = styled.h3`
  font-size: 24px;
  font-family: Articulat, Arial;
  font-weight: 500;

  @media (${small}) {
    font-size: 21px;
  }
`;

export const LoginButton = styled.button`
  background-color: #8b97bc;
  border-radius: 10px;
  margin: 22px 0 28px;
  padding: 10px 40px;

  @media (${small}) {
    margin: 20px 0;
  }
`;

export const LoginText = styled.h4`
  font-size: 17px;
  font-family: Helvetica, Arial;
  font-weight: 700;
  color: #ffffff;
  margin: 0 auto;
`;

export const InputComment = styled.h1`
  color: red;
`;

export const Disclaimer = styled.p`
  font-size: 17px;
  font-family: Articulat, Arial;
  font-weight: 400;

  @media (${small}) {
    font-size: 14px;
  }
`;

export const Guestbook = styled.section`
  min-height: 250px;
  padding: 20px 0;
  margin-bottom: 40px;
`;

export const Comment = styled.div`
  width: 60%;
  min-height: 70px;
  margin-bottom: 35px;

  @media (${small}) {
    width: 100%;
    margin: 0 auto 15px auto;
  }
`;

export const Text = styled.h3`
  font-size: 21px;
  font-family: Articulat, Arial;
  font-weight: 500;

  @media (${small}) {
    font-size: 18px;
  }
`;

export const Metadata = styled.p`
  font-size: 18px;
  font-family: Articulat, Arial;
  font-weight: 400;
  color: #bcbcbc;
  margin: 10px 0 0 10px;

  @media (${small}) {
    font-size: 15px;
  }
`;
