import React from 'react';
import InlineInput from '../components/InputBar';
import Navbar from '../components/Navbar';
import { Title, Subtitle } from '../components/TypicalPage';
import { useSession, signIn } from 'next-auth/react';
import {
  GuestbookDiv,
  MessageBox,
  Lend,
  LoginButton,
  LoginText,
  Disclaimer,
  Guestbook,
  Comment,
  Text,
  Metadata,
} from '../styles/guestbookStyles';

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
        <CommentForm />
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

function CommentForm() {
  const session = useSession();
  const formOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      comment: { value: string };
    };
    const comment = target.comment.value;
    console.log('Comment:', comment);
  };
  if (session.status !== 'authenticated')
    return (
      <LoginButton
        onClick={(e) => {
          e.preventDefault();
          signIn('google');
        }}
      >
        <LoginText>LOGIN</LoginText>
      </LoginButton>
    );
  return (
    <InlineInput
      formOnSubmit={formOnSubmit}
      placeholder='🔥 this is an awesome feature!'
    />
  );
}
