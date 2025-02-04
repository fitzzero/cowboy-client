'use client'

import { Grid, Stack } from '@mui/joy'
import { usePrimaryUser } from '@/hooks/useUser'
import { MinecraftUserProfile } from '../display/minecraftProfile'
import { MinecraftInfo } from '../staticContent/minecraftInfo'
import { MinecraftCta } from '../display/minecraftCta'
import { MinecraftBacklog } from '../staticContent/minecraftBacklog'
import { MinecraftServerStatus } from '../display/serverStatus'
import { MinecraftLeaderboardPreview } from './minecraftLeaderboardPreview'
import { useIsMobile } from '@/hooks/useBreakpoints'
import { MinecraftHero } from '../display/minecraftHero'

export const MinecraftHome = () => {
  const user = usePrimaryUser()
  const isMobile = useIsMobile()
  return (
    <Grid container alignItems='stretch' direction='row' columnSpacing={2}>
      <Grid xs={12}>
        <MinecraftHero />
      </Grid>
      <Grid xs={12} md={6} mt={2}>
        <Stack direction='column' spacing={2}>
          {user ? <MinecraftUserProfile user={user} /> : <MinecraftCta />}
          <MinecraftServerStatus />
        </Stack>
      </Grid>
      <Grid xs={12} md={6} mt={2}>
        <MinecraftLeaderboardPreview />
      </Grid>
      <Grid xs={12} mt={2}>
        <MinecraftInfo />
      </Grid>
      <Grid xs={12} mt={2}>
        <MinecraftBacklog />
      </Grid>
    </Grid>
  )
}
