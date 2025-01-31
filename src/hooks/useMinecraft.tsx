import { logger } from '@/cowboy-database/logger'
import {
  minecraftCreateOrUpdateByName,
  MinecraftCreateOrUpdateByNameProps,
  minecraftFindById,
} from '@/cowboy-database/minecraft'
import { Minecraft } from '@prisma/client'
import useSWR from 'swr'
import { useAction } from './useAction'

export const useMinecraftProfile = (id?: string) => {
  const { data, error } = useSWR(id ? `minecraft-${id}` : null, () =>
    minecraftFindById(id!)
  )
  if (error) {
    logger.alert(error, 'useUser')
  }
  return data
}

export const useMinecraftNameUpdate = (minecraft: Minecraft | null) => {
  const {
    state,
    action: createOrUpdate,
    isLoading,
  } = useAction<Minecraft, MinecraftCreateOrUpdateByNameProps>(
    minecraft,
    minecraftCreateOrUpdateByName
  )
  return { state, createOrUpdate, isLoading }
}
