'use client'

import { Grid } from '@mui/joy'
import { MinecraftServerStatus } from './serverStatus'
import { usePrimaryUser } from '@/hooks/useUser'
import { MinecraftUserProfile } from './minecraftProfile'

export const MinecraftHome = () => {
  const user = usePrimaryUser()
  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={6}>
        <MinecraftServerStatus />
      </Grid>
      {user ? (
        <Grid xs={12} md={6}>
          <MinecraftUserProfile user={user} />
        </Grid>
      ) : null}
    </Grid>
  )
}
