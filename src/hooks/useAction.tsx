import {
  CowboyResponse,
  UserAction,
  UserReqProps,
} from '@/cowboy-database/response'
import { useState } from 'react'

export const useAction = <T, Payload>(
  current: T | null,
  handler: UserAction<T, Payload>
) => {
  const [state, setState] = useState<CowboyResponse<T | null>>({
    data: current,
  })
  const [isLoading, setIsLoading] = useState(false)
  const action = async (payload: Payload & UserReqProps) => {
    setIsLoading(true)
    const res = await handler(state, payload)
    if (res.code !== '200') res.data = current
    setState(res)
    setIsLoading(false)
  }
  return { state, action, isLoading }
}
