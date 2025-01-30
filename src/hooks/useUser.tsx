import { logger } from '@/cowboy-database/logger'
import { userFindById } from '@/cowboy-database/user'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'

export const useUser = (userId?: string) => {
  const { data, error } = useSWR(userId, userFindById)
  if (error) {
    logger.alert(error, 'useUser')
  }
  return data
}

export const usePrimaryUser = () => {
  const session = useSession()
  const { data, error } = useSWR(session?.data?.user?.id, userFindById)
  if (error) {
    logger.alert(error, 'usePrimaryUser')
  }
  return data
}
