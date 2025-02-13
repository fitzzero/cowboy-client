// next-auth.d.ts
import type { NextAuth } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      image: string
    }
  }

  interface User {
    id: string
  }
}
