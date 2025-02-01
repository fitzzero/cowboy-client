'use client'

import { logger } from '@/cowboy-database/logger'
import { minecraftStatsByTopTotalLevel } from '@/cowboy-database/minecraftStats'
import useSWR from 'swr'

export const useMinecraftLeaderboard = (limit: number) => {
  const { data, error } = useSWR(`minecraft-leaderboard-${limit}`, () =>
    minecraftStatsByTopTotalLevel(limit)
  )
  if (error) {
    logger.alert(error, 'useMinecraftLeaderboard')
  }
  return data
}
