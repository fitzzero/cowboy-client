'use client'

import { Tooltip, Typography } from '@mui/joy'
import { JSX, useEffect, useState } from 'react'

interface TimeLeft {
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}

export const DoubleXpCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date('2025-02-10T03:00:00-08:00') // 12:00 PM PDT
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    let timeLeft: TimeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    if (window === undefined) return
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timerComponents: JSX.Element[] = []

  Object.keys(timeLeft).forEach(interval => {
    const key = interval as keyof TimeLeft
    if (!timeLeft[key]) {
      return
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[key]}
        {interval?.slice(0, 1) + ' '}
      </span>
    )
  })

  return (
    <Tooltip title='Friday, February 7th @ 3:00pm PTD'>
      <Typography level='body-sm'>
        World has expanded! Double xp active for:{' '}
        {timerComponents.length ? timerComponents : null}
      </Typography>
    </Tooltip>
  )
}
