import useScroll from '@/hooks/useScroll'
import { Box, Stack } from '@mui/joy'

interface MenuProps {
  account?: boolean
  branding?: React.ReactNode
  height?: number
}

export const CowboyMenuTop = ({
  account = true,
  branding = null,
  height = 48,
}: MenuProps) => {
  const scrollBar = useScroll()

  return (
    <Box height={height}>
      <Stack
        direction='row'
        flexWrap='nowrap'
        justifyContent='space-between'
        alignItems='center'
        color='text.primary'
        sx={{
          backgroundColor:
            scrollBar.y > height ? 'background.level1' : undefined,
          height: 48,
          position: 'fixed',
          width: '100%',
          transition: 'background-color 0.2s',
          zIndex: 1,
        }}>
        <Stack direction='row' spacing={2} alignItems='center' paddingLeft={2}>
          {branding}
        </Stack>
        {account ? (
          <Stack
            direction='row'
            spacing={2}
            alignItems='center'
            paddingRight={2}>
            Account
          </Stack>
        ) : null}
      </Stack>
    </Box>
  )
}
