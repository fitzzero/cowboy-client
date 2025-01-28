import { useSession } from 'next-auth/react'
import { createContext, PropsWithChildren, useContext } from 'react'

interface state {}

export const SocketContext = createContext<state>({})
export const useSocket = () => useContext(SocketContext)

export const SocketProvider = ({ children }: PropsWithChildren) => {
  const { status } = useSession()

  return <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>
}
