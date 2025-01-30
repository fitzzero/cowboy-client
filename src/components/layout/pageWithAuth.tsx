'use server'

import { Page, PageProps } from './page'
import { NextAuthProvider } from '@/providers/nextAuthProvider'
import SWRProvider from '@/providers/swrProvider'

export const PageWithAuth = async ({ children, ...rest }: PageProps) => {
  return (
    <NextAuthProvider>
      <SWRProvider>
        <Page {...rest}>{children}</Page>
      </SWRProvider>
    </NextAuthProvider>
  )
}
