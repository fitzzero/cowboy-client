'use client'
import { useState, useEffect } from 'react'

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: window?.scrollX || 0,
    y: window?.scrollY || 0,
  })

  const handleScroll = () => {
    setScrollPosition({
      x: window.scrollX,
      y: window.scrollY,
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollPosition
}

export default useScroll
