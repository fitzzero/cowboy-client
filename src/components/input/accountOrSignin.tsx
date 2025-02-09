'use client'

import { Button, CircularProgress } from '@mui/joy'
import { signIn, useSession } from 'next-auth/react'
import { AccountAvatarMenu } from './accountAvatarMenu'
import { usePrimaryUser } from '@/hooks/useUser'

export const AccountOrSignin = () => {
  const { status } = useSession()
  const user = usePrimaryUser()

  if (status == 'unauthenticated')
    return (
      <Button size='sm' color='primary' onClick={() => signIn('discord')}>
        Sign in
      </Button>
    )

  if (user) return <AccountAvatarMenu />

  return <CircularProgress size='sm' variant='solid' />
}
