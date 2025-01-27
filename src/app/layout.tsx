'use client'

import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'
import { CssVarsProvider } from '@mui/joy/styles/CssVarsProvider'
import { theme } from '@/style/theme'
import '@/style/global.css'
import Sheet from '@mui/joy/Sheet/Sheet'
import { NextAuthProvider } from '@/providers/nextAuthProvider'
import { SocketProvider } from '@/providers/socketProvider'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <CssVarsProvider
          defaultMode='dark'
          defaultColorScheme='dark'
          modeStorageKey='dark-mode-by-default'
          theme={theme}>
          <NextAuthProvider>
            <SocketProvider>
              <Sheet
                sx={{
                  height: '100%',
                  minHeight: '100dvh',
                  overflowX: 'hidden',
                  position: 'relative',
                  width: '100%',
                  zIndex: 1,
                }}>
                {children}
              </Sheet>
            </SocketProvider>
          </NextAuthProvider>
        </CssVarsProvider>
      </body>
    </html>
  )
}
