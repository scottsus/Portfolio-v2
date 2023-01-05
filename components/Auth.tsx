import React, { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { LoginButton, LoginText } from '../styles/guestbookStyles';
import InlineInput from './InlineInput';

export default function Auth() {
  const session = useSession();
  useEffect(() => console.log('Session:', session));
  if (session.status === 'unauthenticated')
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
  return <InlineInput />;
}
