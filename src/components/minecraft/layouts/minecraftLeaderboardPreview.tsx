import { useMinecraftLeaderboard } from '@/hooks/useMinecraftStats'
import { Card, Stack, Typography } from '@mui/joy'
import { MinecraftUserAvatar } from '../display/minecraftUserAvatar'
import BarChartIcon from '@mui/icons-material/BarChart'

export const MinecraftLeaderboardPreview = () => {
  const leaderboard = useMinecraftLeaderboard(3)
  return (
    <Card sx={{ height: '100%' }}>
      <Typography level='h3'>Leaderboard</Typography>
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
    </Card>
  )
}
