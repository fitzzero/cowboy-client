'use client'

import { MenuTop } from '@/components/layout/menuTop'
import {
  Stack,
  Tab,
  Tabs,
  TabList,
  Typography,
  IconButton,
  Drawer,
  ModalClose,
  Box,
  Tooltip,
} from '@mui/joy'
import FlagIcon from '@mui/icons-material/Flag'
import { usePathname, useRouter } from 'next/navigation'
import { findIndex } from 'lodash'
import { useIsMobile } from '@/hooks/useBreakpoints'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { useServerStatus } from '@/hooks/useMinecraftServer'

interface MenuOption {
  action?: () => void
  label: string
  path?: string
  disabled?: boolean
}

export const MinecraftMenu = () => {
  const { status, isLoading } = useServerStatus()
  const [drawer, setDrawer] = useState(false)
  const router = useRouter()
  const route = usePathname().split('/')[1]
  const path = `/${route || ''}`
  const isMobile = useIsMobile()

  const options: MenuOption[] = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Help',
      path: '/help',
    },
    {
      label: 'Leaderboard',
      path: '/leaderboard',
    },
    {
      label: 'Map',
      path: '/map',
    },
    {
      label: 'Skills',
      path: '/skills',
      disabled: true,
    },
  ]

  const idx = findIndex(options, option => option.path?.toLowerCase() === path)
  const value = idx > -1 ? idx : 0

  // On <Tabs> Change
  const handleChange = (idx: number) => {
    // Get the menu option changed to
    const option = options?.[idx]
    if (!option) return
    // If the option has an action, call it
    const { path, action } = option
    if (action) {
      action()
    } else if (path) {
      router.push(`${path}`)
    }
  }

  const Branding = (
    <Stack direction='row' spacing={1} alignItems='center'>
      <FlagIcon
        color='primary'
        sx={{
          fontSize: '1.3rem',
        }}
      />
      <Typography level='title-lg'>RC MC</Typography>
      <Tooltip title={status?.online ? 'Server Online' : 'Server Offline'}>
        <Box
          sx={{
            cursor: 'pointer',
            height: 8,
            width: 8,
            borderRadius: 4,
            backgroundColor: status?.color,
            marginRight: 4,
            animation: 'ripple 1.2s infinite ease-in-out',
            '@keyframes ripple': {
              '0%': {
                transform: 'scale(1)',
                opacity: 1,
              },
              '100%': {
                transform: 'scale(1.2)',
                opacity: 0,
              },
            },
          }}
        />
      </Tooltip>
    </Stack>
  )
  const MenuList = (
    <TabList>
      {options.map((option, idx) => (
        <Tab key={idx} disabled={option.disabled} value={idx}>
          {option.label}
        </Tab>
      ))}
    </TabList>
  )
  return (
    <>
      <MenuTop
        branding={
          <>
            {isMobile ? (
              <IconButton
                variant='plain'
                color='neutral'
                onClick={() => setDrawer(true)}>
                <MenuIcon />
              </IconButton>
            ) : null}
            {Branding}
            {isMobile ? null : (
              <Tabs
                defaultValue={0}
                onChange={(e, value) => handleChange(value as number)}
                value={value}
                sx={{
                  backgroundColor: 'transparent',
                  border: 'none',
                }}
                variant='outlined'>
                {MenuList}
              </Tabs>
            )}
          </>
        }
      />
      <Drawer
        open={drawer}
        onClose={() => setDrawer(false)}
        sx={{
          '& .MuiDrawer-content': {
            width: 200,
          },
          '& .MuiTabList-root': {
            width: 200,
          },
        }}>
        <Box sx={{ padding: 2 }}>{Branding}</Box>
        <ModalClose />
        <Tabs
          defaultValue={0}
          onChange={(e, value) => handleChange(value as number)}
          value={value}
          sx={{
            backgroundColor: 'transparent',
            border: 'none',
          }}
          variant='outlined'
          orientation='vertical'>
          {MenuList}
        </Tabs>
      </Drawer>
    </>
  )
}
