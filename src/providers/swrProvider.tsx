'use client'

import React, { PropsWithChildren } from 'react'
import { SWRConfig } from 'swr'
import axios from 'axios'

const fetcher = (url: string) => axios.get(url).then(res => res.data)

const SWRProvider = ({ children }: PropsWithChildren) => {
  return (
    <SWRConfig
      value={{
        fetcher,
        onError: error => {
          console.error(error)
        },
      }}>
      {children}
    </SWRConfig>
  )
}

export default SWRProvider
