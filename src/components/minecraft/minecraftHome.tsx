'use client'

import { Grid, Stack, Typography } from '@mui/joy'
import { MinecraftServerStatus } from './serverStatus'
import { usePrimaryUser } from '@/hooks/useUser'
import { MinecraftUserProfile } from './minecraftProfile'
import { MinecraftInfo } from './minecraftInfo'
import { MinecraftCta } from './minecraftCta'
import { MinecraftBacklog } from './minecraftBacklog'

export const MinecraftHome = () => {
  const user = usePrimaryUser()
  return (
    <Grid container spacing={2}>
      <Grid xs={12} md={6}>
        <Stack direction='column' spacing={2}>
          {user ? <MinecraftUserProfile user={user} /> : <MinecraftCta />}
          <MinecraftServerStatus />
        </Stack>
      </Grid>
      <Grid xs={12}>
        <MinecraftInfo />
      </Grid>
      <Grid xs={12}>
        <MinecraftBacklog />
      </Grid>
    </Grid>
  )
}
