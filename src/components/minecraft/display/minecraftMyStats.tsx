import { useMinecraftStats } from '@/hooks/useMinecraftStats'
import { Stack, Tooltip, Typography } from '@mui/joy'
import BarChartIcon from '@mui/icons-material/BarChart'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'

interface MinecraftMyStatsProps {
  userId: string
}
export const MinecraftMyStats = ({ userId }: MinecraftMyStatsProps) => {
  const stats = useMinecraftStats(userId)
  return (
    <Stack direction='row' spacing={1} alignItems='center'>
      <Tooltip title='Total Level'>
        <BarChartIcon />
      </Tooltip>
      <Typography
        level='body-sm'
        sx={{
          paddingRight: 2,
        }}>
        <strong>{stats?.totalLevel || 0}</strong>
      </Typography>
      <Tooltip title='Total Money'>
        <MonetizationOnIcon />
      </Tooltip>
      <Typography level='body-sm'>
        <strong>{stats?.money || 0}</strong>
      </Typography>
    </Stack>
  )
}
