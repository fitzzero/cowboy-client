'use client'

import { MinecraftSkills } from '@/components/minecraft/display/minecraftSkills'
import { useMinecraftLeaderboard } from '@/hooks/useMinecraftStats'
import {
  Avatar,
  AvatarGroup,
  Stack,
  Table,
  Tooltip,
  Typography,
} from '@mui/joy'
import Image from 'next/image'
import BarChartIcon from '@mui/icons-material/BarChart'

export const LeaderboardTable = () => {
  const leaderboard = useMinecraftLeaderboard(100)
  return (
    <Table
      sx={{
        '& th img': {
          filter: 'invert()',
        },
      }}>
      <thead>
        <tr>
          <th style={{ width: '40%' }}>
            <Typography level='title-md'>Player</Typography>
          </th>
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
          {MinecraftSkills().map(skill => (
            <th key={skill}>
              <Tooltip title={skill} placement='top-start'>
                <Image
                  src={`/minecraft/skills/${skill}.svg`}
                  alt={skill}
                  width={16}
                  height={16}
                />
              </Tooltip>
            </th>
          ))}
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
                    src={stats.minecraft.image || '/minecraft/steve.jpg'}
                    alt={stats.minecraft.name}
                  />
                </AvatarGroup>
                <Stack direction='column'>
                  <Typography level='body-md'>
                    {stats.minecraft.name}
                  </Typography>
                  <Typography level='body-xs'>{stats.user.name}</Typography>
                </Stack>
              </Stack>
            </td>
            <td>
              <Tooltip title={'Total Level'} placement='top-start'>
                <Typography level='body-xs' color='primary' fontWeight='lg'>
                  {stats.totalLevel}
                </Typography>
              </Tooltip>
            </td>
            {MinecraftSkills().map(skillName => {
              const skill = skillName.toLowerCase()
              // @ts-ignore
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
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
