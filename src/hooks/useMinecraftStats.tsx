'use client'

import { logger } from '@/cowboy-database/logger'
import {
  minecraftStatsByTopTotalLevel,
  minecraftStatsFindByUserId,
} from '@/cowboy-database/minecraftStats'
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

export const useMinecraftStats = (id: string) => {
  const { data, error } = useSWR(`minecraft-stats-${id}`, () =>
    minecraftStatsFindByUserId(id)
  )
  if (error) {
    logger.alert(error, 'useMinecraftStats')
  }
  return data
}
