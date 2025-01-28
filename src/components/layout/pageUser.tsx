'use server'

import { UserPrimaryProvider } from '@/providers/userPrimaryProvider'
import { Page, PageProps } from './page'
import { NextAuthProvider } from '@/providers/nextAuthProvider'

export const PageUser = async ({ children, ...rest }: PageProps) => {
  return (
    <NextAuthProvider>
      <UserPrimaryProvider>
        <Page {...rest}>{children}</Page>
      </UserPrimaryProvider>
    </NextAuthProvider>
  )
}
