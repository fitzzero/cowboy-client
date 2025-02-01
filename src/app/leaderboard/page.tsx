import { Metadata } from 'next'
import { PageWithAuth } from '@/components/layout/pageWithAuth'
import { MinecraftMenu } from '../minecraftMenu'
import { Sheet, Typography } from '@mui/joy'

export const metadata: Metadata = {
  title: 'RC MC: Leaderboard',
  description: 'An unofficial RC Minecraft server',
}

export default function Home() {
  return (
    <PageWithAuth menu={<MinecraftMenu />}>
      <Sheet
        variant='solid'
        sx={{
          p: 2,
        }}>
        <Typography level='h1'>Coming Soon tm</Typography>
      </Sheet>
    </PageWithAuth>
  )
}
