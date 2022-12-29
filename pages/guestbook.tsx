import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { Title, Subtitle } from '../components/TypicalPage';

export default function GuestbookPage() {
  return (
    <GuestbookDiv>
      <Navbar />
      <Title>Guestbook</Title>
      <Subtitle>
        This is my way of remembering that you were here. No cookies, no
        trackers, no data collection. Feel free to leave a comment below, or
        don&apos;t. But when I&apos;m rich and famous one day, I&apos;ll
        remember that brucewayne@batman.com, and possibly you, were my earliest
        patrons. 🦇 🫵
      </Subtitle>
      <MessageBox>
        <Lend>✒️ Lend me your digital autograph</Lend>
        <LoginButton>
          <LoginText>LOGIN</LoginText>
        </LoginButton>
        <Disclaimer>
          Your information is only used to display your alias, nothing more.
        </Disclaimer>
      </MessageBox>
      <Guestbook>
        <Comment>
          <Text>🚀🚀 Insane!!</Text>
          <Metadata>wilsoset on December 27, 2022</Metadata>
        </Comment>
        <Comment>
          <Text>💩 this website is shit</Text>
          <Metadata>caitlintj on December 25, 2022</Metadata>
        </Comment>
        <Comment>
          <Text>⏰ what a waste of time</Text>
          <Metadata>yikespatricia on December 28, 2022</Metadata>
        </Comment>
        <Comment>
          <Text>🏳️ please check who attended the dim sum event</Text>
          <Metadata>siyunee on December 24, 2022</Metadata>
        </Comment>
      </Guestbook>
    </GuestbookDiv>
  );
}

const GuestbookDiv = styled.div`
  height: 95vh;
  overflow: hidden;
`;

const MessageBox = styled.div`
  width: 85%;
  max-height: 175px;
  border-radius: 10px;
  background-color: #222632;
  margin: 35px auto;
  padding: 20px 36px;
`;

const Lend = styled.h3`
  font-size: 24px;
  font-family: Articulat, Arial;
  font-weight: 500;
`;

const LoginButton = styled.button`
  background-color: #8b97bc;
  border-radius: 10px;
  margin: 22px 0 28px;
  padding: 10px 40px;
`;

const LoginText = styled.h4`
  font-size: 17px;
  font-family: Helvetica, Arial;
  font-weight: 700;
  color: #ffffff;
  margin: 0 auto;
`;

const Disclaimer = styled.p`
  font-size: 17px;
  font-family: Articulat, Arial;
  font-weight: 400;
`;

const Guestbook = styled.section`
  width: 100%;
  height: 250px;
  padding: 20px 0;
  overflow-y: scroll;
`;

const Comment = styled.div`
  width: 60%;
  min-height: 70px;
  margin-bottom: 35px;
`;

const Text = styled.h3`
  font-size: 21px;
  font-family: Articulat, Arial;
  font-weight: 500;
`;

const Metadata = styled.p`
  font-size: 18px;
  font-family: Articulat, Arial;
  font-weight: 400;
  margin: 10px 0 0 10px;
`;
