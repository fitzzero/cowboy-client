'use client'

import {
  MinecraftSkills,
  MinecraftSkillsWithIcons,
} from '@/components/minecraft/display/minecraftSkills'
import { useMinecraftLeaderboard } from '@/hooks/useMinecraftStats'
import {
  Avatar,
  AvatarGroup,
  Stack,
  Table,
  Tooltip,
  Typography,
} from '@mui/joy'
import BarChartIcon from '@mui/icons-material/BarChart'
import { ReactNode } from 'react'
import { useIsMobile } from '@/hooks/useBreakpoints'

export const LeaderboardTable = () => {
  const leaderboard = useMinecraftLeaderboard(100)
  const isMobile = useIsMobile()

  return (
    <Table
      sx={{
        '& thead th': {
          backgroundColor: 'background.popup',
        },
        '& th svg': {
          fill: '#fff',
          height: '16px',
        },
      }}>
      <thead>
        <tr>
          <th style={{ width: '40%' }}>
            <Typography level='title-md'>Player</Typography>
          </th>
          {isMobile ? null : (
            <>
              <th>
                <Tooltip title={'Total Level'} placement='top-start'>
                  <BarChartIcon
                    sx={{
                      color: 'text.primary',
                      width: '18px',
                      height: '18px',
                    }}
                  />
                </Tooltip>
              </th>
              {MinecraftSkills.map(skill => {
                const icon: ReactNode | null =
                  MinecraftSkillsWithIcons?.[skill] || null
                return (
                  <th key={skill}>
                    <Tooltip title={skill} placement='top-start'>
                      {/* @ts-expect-error This def exists but types are wrong */}
                      {icon}
                    </Tooltip>
                  </th>
                )
              })}
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {leaderboard?.map(stats => (
          <tr key={stats.id}>
            <td>
              <Stack direction='row' alignItems='center' spacing={2}>
                <AvatarGroup>
                  <Avatar
                    src={stats.user.image || ''}
                    alt={stats.minecraft.name}
                  />
                  <Avatar
                    src={stats.minecraft.image || '/assets/steve.jpg'}
                    alt={stats.minecraft.name}
                  />
                </AvatarGroup>
                <Stack direction='column'>
                  <Typography level='body-md'>
                    {stats.minecraft.name}
                  </Typography>
                  {isMobile ? (
                    <Stack direction='row' alignItems='center' spacing={1}>
                      <BarChartIcon />
                      <Typography level='body-sm'>
                        {stats.totalLevel}
                      </Typography>
                    </Stack>
                  ) : (
                    <Typography level='body-xs'>{stats.user.name}</Typography>
                  )}
                </Stack>
              </Stack>
            </td>
            {isMobile ? null : (
              <>
                <td>
                  <Tooltip title={'Total Level'} placement='top-start'>
                    <Typography level='body-xs' color='primary' fontWeight='lg'>
                      {stats.totalLevel}
                    </Typography>
                  </Tooltip>
                </td>
                {MinecraftSkills.map(skillName => {
                  const skill = skillName.toLowerCase()
                  // @ts-expect-error This def exists but types are wrong
                  const skillLevel = stats?.[`${skill}Level`]

                  return (
                    <td key={skillName}>
                      {skillLevel ? (
                        <Tooltip title={skill} placement='top-start'>
                          <Typography level='body-xs'>{skillLevel}</Typography>
                        </Tooltip>
                      ) : null}
                    </td>
                  )
                })}
              </>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
