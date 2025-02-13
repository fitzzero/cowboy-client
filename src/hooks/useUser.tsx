import { logger } from '@/cowboy-database/logger'
import { userFindById } from '@/cowboy-database/user'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

export const useUser = (userId?: string) => {
  const { data, error } = useSWR(userId ? `user-${userId}` : null, () =>
    userFindById(userId!)
  )
  if (error) {
    logger.alert(error, 'useUser')
  }
  return data
}

export const usePrimaryUser = () => {
  const { data: session } = useSession()
  const { data, error } = useSWR(
    session?.user?.id ? `user-${session.user.id}` : null,
    () => userFindById(session!.user!.id)
  )
  if (error) {
    logger.alert(error, 'usePrimaryUser')
  }
  return data
}
