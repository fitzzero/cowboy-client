'use client'

import { Button, CircularProgress } from '@mui/joy'
import { signIn, useSession } from 'next-auth/react'
import { AccountAvatarMenu } from './accountAvatarMenu'

export const AccountOrSignin = () => {
  const { status } = useSession()

  if (status === 'unauthenticated')
    return (
      <Button color='primary' onClick={() => signIn('discord')}>
        Sign in
      </Button>
    )

  if (status === 'authenticated') return <AccountAvatarMenu />

  return <CircularProgress size='sm' variant='solid' />
}
