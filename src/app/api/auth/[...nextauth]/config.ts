import DiscordProvider from 'next-auth/providers/discord'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import { AuthOptions } from 'next-auth'

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
}
