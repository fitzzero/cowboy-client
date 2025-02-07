'use client'

import { Fullscreen, FullscreenExit } from '@mui/icons-material'
import { IconButton } from '@mui/joy'
import { useEffect, useState } from 'react'

export const MinecraftLiveMap = () => {
  const [src, setSrc] = useState('https://minecraftmap.techtree.gg')
  const [fullscreen, setFullscreen] = useState(false)

  const updateSrc = () => {
    // Generate a unique query parameter to force clear the cache
    const uniqueParam = new Date().getTime()
    setSrc(`https://minecraftmap.techtree.gg/?_=${uniqueParam}`)
  }

  useEffect(() => {
    // Initial load
    updateSrc()
  }, [])

  return (
    <>
      <IconButton
        variant='solid'
        onClick={() => setFullscreen(!fullscreen)}
        sx={{
          position: 'absolute',
          zIndex: 9,
          marginTop: fullscreen ? 0 : '12px',
          marginLeft: fullscreen ? 0 : '58px',
          top: fullscreen ? 52 : undefined,
          left: fullscreen ? 58 : undefined,
          backgroundColor: '#fff',
          color: '#333',
          boxShadow: '0 0 3px 1px #333',
        }}>
        {fullscreen ? <FullscreenExit /> : <Fullscreen />}
      </IconButton>
      <iframe
        src={src}
        width='100%'
        height='100%'
        frameBorder={0}
        style={{
          minHeight: fullscreen
            ? 'calc(100dvh - 40px)'
            : 'calc(100dvh - 150px)',
          minWidth: fullscreen ? '100dvw' : undefined,
          borderRadius: fullscreen ? 0 : 8,
          border: '2px solid rgb(0, 0, 0, 0.8)',
          zIndex: fullscreen ? 8 : undefined,
          position: fullscreen ? 'absolute' : undefined,
          top: fullscreen ? 40 : undefined,
          left: fullscreen ? 0 : undefined,
        }}
      />
    </>
  )
}
