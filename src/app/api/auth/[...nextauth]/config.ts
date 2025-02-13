import DiscordProvider from 'next-auth/providers/discord'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { AuthOptions } from 'next-auth'
import { prisma } from '@/cowboy-database/prisma'

// Log the NEXTAUTH_SECRET to verify it's being read correctly
if (!process.env.NEXTAUTH_SECRET) {
  throw new Error('NEXTAUTH_SECRET is not defined')
}

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || '',
      clientSecret: process.env.DISCORD_CLIENT_SECRET || '',
    }),
  ],
  adapter: PrismaAdapter(prisma),
  cookies: {
    sessionToken: {
      name: 'next-auth.session',
      options: {
        httpOnly: true,
        sameSite: true,
        path: '/',
        secure: true,
      },
    },
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
  },
}
