import { useMinecraftStats } from '@/hooks/useMinecraftStats'
import { Stack, Typography } from '@mui/joy'
import BarChartIcon from '@mui/icons-material/BarChart'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'

interface MinecraftMyStatsProps {
  userId: string
}
export const MinecraftMyStats = ({ userId }: MinecraftMyStatsProps) => {
  const stats = useMinecraftStats(userId)
  return (
    <Stack direction='row' spacing={1} alignItems='center'>
      <BarChartIcon />
      <Typography
        level='body-sm'
        sx={{
          paddingRight: 2,
        }}>
        Total Level: <strong>{stats?.totalLevel || 0}</strong>
      </Typography>
      <MonetizationOnIcon />
      <Typography level='body-sm'>
        Money: <strong>{stats?.money || 0}</strong>
      </Typography>
    </Stack>
  )
}
