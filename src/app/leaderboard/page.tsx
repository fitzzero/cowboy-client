import { Metadata } from 'next'
import { PageWithAuth } from '@/components/layout/pageWithAuth'
import { MinecraftMenu } from '../minecraftMenu'
import { LeaderboardTable } from './leaderboardTable'
import { Card } from '@mui/joy'
import { DoubleXpCountdown } from '@/components/minecraft/display/doubleXp'

export const metadata: Metadata = {
  title: 'RC MC: Leaderboard',
  description: 'An unofficial RC Minecraft server',
}

export default function Home() {
  return (
    <PageWithAuth menu={<MinecraftMenu />}>
      <Card>
        <DoubleXpCountdown />
        <LeaderboardTable />
      </Card>
    </PageWithAuth>
  )
}
