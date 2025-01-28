'use client'

import { userFindByEmail } from '@/lib/user'
import { User } from '@prisma/client'
import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'

interface state {
  user?: User | null
}

export const PrimaryUsercontext = createContext<state>({})
export const usePrimaryUser = () => useContext(PrimaryUsercontext)

export const UserPrimaryProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null)

  const session = useSession()
  const userEmail = session?.data?.user?.email

  const updateUser = async (email: string) => {
    const user = await userFindByEmail(email)
    setUser(user)
  }

  // Load user data when session changes
  useEffect(() => {
    if (userEmail) updateUser(userEmail)
  }, [session])

  return (
    <PrimaryUsercontext.Provider value={{ user }}>
      {children}
    </PrimaryUsercontext.Provider>
  )
}
