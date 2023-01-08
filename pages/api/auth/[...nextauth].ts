import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
};

export default NextAuth(authOptions);
