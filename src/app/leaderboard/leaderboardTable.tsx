'use client'

import {
  MinecraftSkills,
  MinecraftSkillsWithIcons,
} from '@/components/minecraft/display/minecraftSkills'
import { useMinecraftLeaderboard } from '@/hooks/useMinecraftStats'
import {
  Avatar,
  AvatarGroup,
  Box,
  IconButton,
  Stack,
  Table,
  Tooltip,
  Typography,
} from '@mui/joy'
import BarChartIcon from '@mui/icons-material/BarChart'
import { ReactNode, useEffect, useState } from 'react'
import { useIsMobile } from '@/hooks/useBreakpoints'
import { MonetizationOn } from '@mui/icons-material'
import { isEmpty, take } from 'lodash'

export const LeaderboardTable = () => {
  const leaderboard = useMinecraftLeaderboard(100)
  const isMobile = useIsMobile()
  const [topStats, setTopStats] = useState<Record<string, ReactNode[]>>({})
  const [sortBy, setSortBy] = useState('totalLevel')

  useEffect(() => {
    if (!leaderboard || isEmpty(leaderboard)) return
    const newTopStats: Record<string, ReactNode[]> = {}
    MinecraftSkills.forEach(skill => {
      const icon: ReactNode | null = MinecraftSkillsWithIcons?.[skill] || null
      const copy = [...leaderboard]
      const top = take(
        copy.sort((a, b) => {
          return (
            //@ts-expect-error This def exists but types are wrong
            b[`${skill.toLowerCase()}Level`] - a[`${skill.toLowerCase()}Level`]
          )
        }),
        1
      )
      top.forEach((row, idx) => {
        const chip = (
          <Tooltip
            key={skill}
            title={`#${idx + 1} ${skill}`}
            placement='top-start'>
            <Box
              sx={{
                '& svg': {
                  fill: '#ccc',
                  height: '12px',
                },
              }}>
              {icon}
            </Box>
          </Tooltip>
        )
        if (!newTopStats[row.minecraftId]) newTopStats[row.minecraftId] = []
        if (idx == 0) {
          newTopStats[row.minecraftId].unshift(chip)
        } else {
          newTopStats[row.minecraftId].push(chip)
        }
      })
    })
    setTopStats(newTopStats)
  }, [leaderboard])

  return (
    <Table
      sx={{
        borderRadius: 8,
        overflow: 'hidden',
        '& thead th': {
          backgroundColor: 'neutral.300',
        },
        '& tr': {
          '&:nth-of-type(odd)': {
            backgroundColor: '#000',
          },
          '&:nth-of-type(even)': {
            backgroundColor: '#111',
          },
        },
        '& th svg': {
          fill: '#fff',
          height: '16px',
        },
      }}>
      <thead>
        <tr>
          {isMobile ? null : <th />}
          <th style={{ width: '30%' }}>
            <Typography level='title-md'>Player</Typography>
          </th>
          {isMobile ? null : (
            <>
              <th>
                <Tooltip title={'Total Level'} placement='top-start'>
                  <IconButton
                    onClick={() => setSortBy('totalLevel')}
                    sx={{
                      minWidth: 0,
                      backgroundColor:
                        sortBy == 'totalLevel' ? 'primary.500' : '',
                    }}>
                    <BarChartIcon
                      sx={{
                        color: 'text.primary',
                        width: '18px',
                        height: '18px',
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </th>
              <th>
                <Tooltip title={'Total Money'} placement='top-start'>
                  <IconButton
                    onClick={() => setSortBy('money')}
                    sx={{
                      minWidth: 0,
                      backgroundColor: sortBy == 'money' ? 'primary.500' : '',
                    }}>
                    <MonetizationOn
                      sx={{
                        color: 'text.primary',
                        width: '18px',
                        height: '18px',
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </th>
              {MinecraftSkills.map(skill => {
                const icon: ReactNode | null =
                  MinecraftSkillsWithIcons?.[skill] || null
                return (
                  <th key={skill}>
                    <Tooltip title={skill} placement='top-start'>
                      <IconButton
                        onClick={() => setSortBy(`${skill.toLowerCase()}Level`)}
                        sx={{
                          minWidth: 0,
                          backgroundColor:
                            sortBy == `${skill.toLowerCase()}Level`
                              ? 'primary.500'
                              : '',
                        }}>
                        {icon}
                      </IconButton>
                    </Tooltip>
                  </th>
                )
              })}
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {leaderboard
          ?.sort((a, b) => {
            //@ts-expect-error Untyped sortby
            return b[sortBy] - a[sortBy]
          })
          ?.map((stats, idx) => {
            return (
              <tr key={stats.id}>
                {isMobile ? null : (
                  <td>
                    <Typography level='body-sm'>{idx + 1}</Typography>
                  </td>
                )}
                <td>
                  <Stack direction='row' alignItems='center' spacing={2}>
                    <AvatarGroup>
                      <Tooltip title={stats.user.name} placement='top-start'>
                        <Avatar
                          src={stats.user.image || ''}
                          alt={stats.minecraft.name}
                        />
                      </Tooltip>
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
                          <Typography level='body-sm'>#{idx + 1}</Typography>
                          <BarChartIcon />
                          <Typography level='body-sm'>
                            {stats.totalLevel}
                          </Typography>
                        </Stack>
                      ) : (
                        <Stack direction='row' alignItems='center' spacing={1}>
                          {topStats?.[stats?.minecraftId]?.map(stat => stat)}
                        </Stack>
                      )}
                    </Stack>
                  </Stack>
                </td>
                {isMobile ? null : (
                  <>
                    <td>
                      <Tooltip title={'Total Level'} placement='top-start'>
                        <Typography
                          level='body-xs'
                          color='primary'
                          fontWeight='lg'>
                          {stats.totalLevel}
                        </Typography>
                      </Tooltip>
                    </td>
                    <td>
                      <Tooltip title={'Total Money'} placement='top-start'>
                        <Typography
                          level='body-xs'
                          color='primary'
                          fontWeight='lg'>
                          {stats.money}
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
                              <Typography level='body-xs'>
                                {skillLevel}
                              </Typography>
                            </Tooltip>
                          ) : null}
                        </td>
                      )
                    })}
                  </>
                )}
              </tr>
            )
          })}
      </tbody>
    </Table>
  )
}
