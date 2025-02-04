import { useEffect, useState } from 'react'

export const MinecraftLiveMap = () => {
  const [src, setSrc] = useState('')

  useEffect(() => {
    // Generate a unique query parameter to force clear the cache
    const uniqueParam = new Date().getTime()
    setSrc(`https://minecraftmap.techtree.gg/?_=${uniqueParam}`)
  }, [])

  return (
    <iframe
      src={src}
      width='100%'
      height='100%'
      frameBorder={0}
      style={{
        minHeight: 'calc(100dvh - 100px)',
        borderRadius: 8,
        border: '2px solid rgb(0, 0, 0, 0.8)',
      }}
    />
  )
}
