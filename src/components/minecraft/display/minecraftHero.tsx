import { AspectRatio, Button, Card, Stack, Tooltip, Typography } from '@mui/joy'
import { MinecraftSkills, MinecraftSkillsWithIcons } from './minecraftSkills'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useIsMobile } from '@/hooks/useBreakpoints'

export const MinecraftHero = () => {
  const isMobile = useIsMobile()
  const router = useRouter()
  const heroContent = useMemo(
    () => [
      <Stack
        direction='column'
        spacing={2}
        key={1}
        sx={{ textAlign: 'center' }}>
        <Typography level='h2'>mc.rally.gg</Typography>
        <Typography level='body-lg'>
          A casual survival server with MMO elements
        </Typography>
      </Stack>,
      <Stack
        key={2}
        direction='column'
        spacing={2}
        sx={{
          textAlign: 'center',
        }}>
        <Typography level='h2'>11 Skills</Typography>
        <Typography level='body-lg'>
          11 skills with abilities & passives
        </Typography>
        <Stack
          direction='row'
          spacing={2}
          sx={{
            '& svg': {
              fill: '#fff',
              width: isMobile ? 16 : 24,
              height: isMobile ? 16 : 24,
            },
          }}>
          {MinecraftSkills.map(skill => {
            const icon: ReactNode | null =
              MinecraftSkillsWithIcons?.[skill] || null
            return (
              <Tooltip key={skill} title={skill} placement='top-start'>
                {/* @ts-expect-error This def exists but types are wrong */}
                {icon}
              </Tooltip>
            )
          })}
        </Stack>
      </Stack>,
      <Stack
        key={2}
        direction='column'
        spacing={2}
        sx={{
          textAlign: 'center',
        }}>
        <Typography level='h2'>Leaderboards</Typography>
        <Typography level='body-lg'>View where you rank</Typography>
        <Button color='primary' onClick={() => router.push('/leaderboards')}>
          View Leaderboard
        </Button>
      </Stack>,
      <Stack
        key={2}
        direction='column'
        spacing={2}
        sx={{
          textAlign: 'center',
        }}>
        <Typography level='h2'>Map</Typography>
        <Typography level='body-lg'>
          Live map showing exploration and player location
        </Typography>
        <Button color='primary' onClick={() => router.push('/leaderboards')}>
          View Map
        </Button>
      </Stack>,
    ],
    [isMobile, router]
  )

  // Use effect that updates content to the next in heroContent every 5 seconds
  // and loops back to the start
  const [content, setContent] = useState(heroContent[0])
  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      index = (index + 1) % heroContent.length
      setContent(heroContent[index])
    }, 5000)
    return () => clearInterval(interval)
  }, [heroContent])

  return (
    <AspectRatio
      ratio={isMobile ? '4/3' : '4/1'}
      sx={{
        borderRadius: 8,
        overflow: 'hidden',
      }}>
      <Card>{content}</Card>
    </AspectRatio>
  )
}
