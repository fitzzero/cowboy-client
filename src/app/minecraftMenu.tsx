'use client'

import { MenuTop } from '@/components/layout/menuTop'
import { Stack, Tab, Tabs, TabList, Typography } from '@mui/joy'
import FlagIcon from '@mui/icons-material/Flag'
import { usePathname, useRouter } from 'next/navigation'
import { findIndex } from 'lodash'

interface MenuOption {
  action?: () => void
  label: string
  path?: string
  disabled?: boolean
}

export const MinecraftMenu = () => {
  const router = useRouter()
  const route = usePathname().split('/')[1]
  const path = `/${route || ''}`

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
      disabled: true,
    },
    {
      label: 'Skills',
      path: '/skills',
      disabled: true,
    },
    {
      label: 'Map',
      path: '/map',
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

  return (
    <MenuTop
      branding={
        <Stack direction='row' spacing={1} alignItems='center'>
          <FlagIcon
            color='primary'
            sx={{
              fontSize: '1.3rem',
            }}
          />
          <Typography
            sx={{
              paddingRight: 4,
            }}
            level='title-lg'>
            RC MC
          </Typography>
          <Tabs
            defaultValue={0}
            onChange={(e, value) => handleChange(value as number)}
            value={value}
            sx={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
            variant='outlined'>
            <TabList>
              {options.map((option, idx) => (
                <Tab key={idx} disabled={option.disabled} value={idx}>
                  {option.label}
                </Tab>
              ))}
            </TabList>
          </Tabs>
        </Stack>
      }
    />
  )
}
