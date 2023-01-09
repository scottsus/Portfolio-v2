import React, { useState, useEffect } from 'react';
import InlineInput from '../components/InputBar';
import Navbar from '../components/Navbar';
import { Title, Subtitle } from '../components/TypicalPage';
import {
  GuestbookDiv,
  MessageBox,
  Guestbook,
  Comment,
  Text,
  Metadata,
  Lend,
  LoginButton,
  LoginText,
  Disclaimer,
} from '../styles/guestbookStyles';
import { useSession, signIn } from 'next-auth/react';
import { db, serverTimestamp } from '../lib/firebase';
import { docToAutograph } from '../lib/utils';

const LIMIT = 10;

interface IAutograph {
  email: string;
  comment: string;
  date?: string;
}

export async function getServerSideProps() {
  const autographsQuery = db
    .collectionGroup('autographs')
    .orderBy('timestamp', 'desc')
    .limit(LIMIT);
  const autographs: IAutograph[] = await autographsQuery
    .get()
    .then((snapshot) => snapshot.docs.map(docToAutograph));
  return {
    props: { autographs },
  };
}

interface IGuestbookPage {
  autographs: IAutograph[];
}

export default function GuestbookPage({ autographs }: IGuestbookPage) {
  const [autographList, setAutographList] = useState<JSX.Element[]>([]);
  const newAutographs = autographs.map((autograph: IAutograph) => {
    const author = autograph.email.split('@')[0];
    return (
      <Comment key={autograph.comment + '|' + author}>
        <Text>{autograph.comment}</Text>
        <Metadata>
          {author} on {autograph.date}
        </Metadata>
      </Comment>
    );
  });
  useEffect(() => {
    setAutographList(newAutographs);
  }, []);
  return (
    <GuestbookDiv>
      <Navbar />
      <Title>Guestbook</Title>
      <Subtitle>
        This is my way of remembering that you were here. No cookies, no
        trackers, no data collection. Feel free to leave a comment below, or
        don&apos;t. But when I&apos;m rich and famous one day, I&apos;ll
        remember that <span style={{ color: '#ffffff' }}>brucewayne69</span>,
        and possibly you, were my earliest patrons. 🦇 🫵
      </Subtitle>
      <MessageBox>
        <Lend>✒️ Lend me your digital autograph</Lend>
        <CommentForm setAutographList={setAutographList} />
        <Disclaimer>
          Your information is only used to display your alias, nothing more.
        </Disclaimer>
      </MessageBox>
      <Guestbook>{autographList}</Guestbook>
    </GuestbookDiv>
  );
}

interface ICommentForm {
  setAutographList: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
}

function CommentForm({ setAutographList }: ICommentForm) {
  const session = useSession();
  const formOnSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      comment: { value: string };
    };
    const comment = target.comment.value;
    target.comment.value = '';

    const data = {
      comment: comment,
      email: session.data?.user?.email || 'unkw@unkw.com',
      timestamp: serverTimestamp(),
    };

    await db
      .collection('autographs')
      .add(data)
      .catch((err) => {
        console.log(err);
        return;
      });

    const newAutograph = (
      <Comment>
        <Text>{data.comment}</Text>
        <Metadata>
          {data.email.split('@')[0]} on{' '}
          {new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </Metadata>
      </Comment>
    );

    setAutographList((autographList) => [newAutograph, ...autographList]);
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
