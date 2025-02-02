'use client'

import useScroll from '@/hooks/useScroll'
import { Box, Stack } from '@mui/joy'
import { AccountOrSignin } from '../input/accountOrSignin'

interface MenuProps {
  account?: boolean
  branding?: React.ReactNode
  height?: number
}

export const MenuTop = ({
  account = true,
  branding = null,
  height = 48,
}: MenuProps) => {
  const scrollPosition = useScroll()

  return (
    <Box height={height + 16}>
      <Stack
        direction='row'
        flexWrap='nowrap'
        justifyContent='space-between'
        alignItems='center'
        color='text.primary'
        sx={{
          backgroundColor:
            scrollPosition.y > height ? 'background.level1' : undefined,
          height: 48,
          position: 'fixed',
          width: '100%',
          transition: 'background-color 0.2s',
          zIndex: 9,
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
            <AccountOrSignin />
          </Stack>
        ) : null}
      </Stack>
    </Box>
  )
}
