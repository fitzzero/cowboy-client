import { createContext, PropsWithChildren, useContext } from 'react'

interface state {
  status?: true
}

export const SocketContext = createContext<state>({})
export const useSocket = () => useContext(SocketContext)

export const SocketProvider = ({ children }: PropsWithChildren) => {
  return <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>
}
