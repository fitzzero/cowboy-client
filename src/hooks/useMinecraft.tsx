import { logger } from '@/cowboy-database/logger'
import {
  createMinecraftProfile,
  findMinecraftById,
  getMinecraftPublicProfile,
  getMinecraftPublicSkin,
} from '@/cowboy-database/minecraft'
import { Prisma } from '@prisma/client'
import { useState } from 'react'
import useSWR from 'swr'
import { usePrimaryUser } from './useUser'

export const useMinecraftProfile = (id?: string) => {
  const { data, error } = useSWR(id ? `minecraft-${id}` : null, () =>
    findMinecraftById(id!)
  )
  if (error) {
    logger.alert(error, 'useUser')
  }
  return data
}

export const useMinecraftProfileCreate = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const user = usePrimaryUser()

  const createProfile = async (handle: string) => {
    setLoading(true)
    setError(null)

    try {
      if (!user) {
        throw new Error('User not found')
      }

      // Look up the handle at Mojang API
      const id = await getMinecraftPublicProfile(handle)

      // Look up the player's skin
      const skinUrl = await getMinecraftPublicSkin(id)

      // Create a Prisma.MinecraftCreateInput object
      const minecraftData: Prisma.MinecraftCreateInput = {
        user: { connect: { id: user.id } },
        id,
        name: handle,
        skinUrl,
      }

      // Save the profile using Prisma
      await createMinecraftProfile(minecraftData)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { createProfile, loading, error }
}
