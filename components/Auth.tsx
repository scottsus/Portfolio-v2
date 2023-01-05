import React from 'react';
import { useSession, signIn } from 'next-auth/react';
import { InputComment, LoginButton } from '../styles/guestbookStyles';

export default function Auth() {
  const session = useSession();
  if (!session) return <InputComment>NOT SIGNED IN</InputComment>;
  return <LoginButton onClick={() => signIn()}>LOGIN</LoginButton>;
}
