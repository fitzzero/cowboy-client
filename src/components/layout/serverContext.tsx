'use client'

import { NextAuthProvider } from '@/providers/nextAuthProvider'
import { SocketProvider } from '@/providers/socketProvider'
import { PropsWithChildren } from 'react'

export const ServerContext = ({ children }: PropsWithChildren) => {
  return (
    <NextAuthProvider>
      <SocketProvider>{children}</SocketProvider>
    </NextAuthProvider>
  )
}
