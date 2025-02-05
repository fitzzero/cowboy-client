import { useMinecraftLeaderboard } from '@/hooks/useMinecraftStats'
import { Button, Card, CardContent, Stack, Typography } from '@mui/joy'
import { MinecraftUserAvatar } from '../display/minecraftUserAvatar'
import BarChartIcon from '@mui/icons-material/BarChart'
import { useRouter } from 'next/navigation'
import { DoubleXpCountdown } from '../display/doubleXp'

export const MinecraftLeaderboardPreview = () => {
  const router = useRouter()
  const leaderboard = useMinecraftLeaderboard(3)
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Stack
          direction='row'
          justifyContent={'space-between'}
          alignItems='center'>
          <Typography level='h3'>Leaderboard</Typography>
          <Button color='neutral' onClick={() => router.push('/leaderboard')}>
            View All
          </Button>
        </Stack>
        <DoubleXpCountdown />
        {leaderboard?.map(stats => (
          <Stack key={stats.id} direction='row' alignItems='center' spacing={2}>
            <MinecraftUserAvatar
              size='md'
              user={stats.user}
              minecraft={stats.minecraft}
            />
            <Stack direction='column'>
              <Typography level='body-lg'>{stats.minecraft.name}</Typography>
              <Stack direction='row' alignItems='center'>
                <BarChartIcon />
                <Typography level='body-sm'>
                  Total Level: {stats.totalLevel}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </CardContent>
    </Card>
  )
}
