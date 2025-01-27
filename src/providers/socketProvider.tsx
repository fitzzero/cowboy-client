import { logStart } from '@/lib/logger'
import { useSession } from 'next-auth/react'
import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react'

interface state {}

export const SocketContext = createContext<state>({})
export const useSocket = () => useContext(SocketContext)

export const SocketProvider = ({ children }: PropsWithChildren) => {
  const { status } = useSession()
  const [prevStatus, setPrevStatus] = useState(status)
  const [token, setToken] = useState<string | undefined>(undefined)
  const [uri, setUri] = useState<string | undefined>(undefined)
  console.log('token: ' + token)

  // Get server connect info
  useMemo(async () => {
    if (status === 'authenticated' && prevStatus !== 'unauthenticated') {
      logStart('SocketProvider', 'Loading server data')
      const res = await fetch(`/api/io`).then(res => res.json())
      if (res?.sessionToken) setToken(res.sessionToken)
      if (res?.ioUri) setUri(res.ioUri)
    }
  }, [status])

  return <SocketContext.Provider value={{}}>{children}</SocketContext.Provider>
}
