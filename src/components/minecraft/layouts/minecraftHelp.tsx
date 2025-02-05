'use client'

import { useIsMobile } from '@/hooks/useBreakpoints'
import { Card, Stack, Typography } from '@mui/joy'

interface ServerCommand {
  name: string
  description: string
}
export const MinecraftHelp = () => {
  const isMobile = useIsMobile()
  const commands: ServerCommand[] = [
    {
      name: '/help',
      description: 'Get list of available commands',
    },
    {
      name: '/spawn',
      description: 'Teleport to spawn',
    },
    {
      name: '/home',
      description: 'Teleport to your home point',
    },
    {
      name: '/warp [warp]',
      description: 'Warp to a set location ie /warp northspawn',
    },
    {
      name: '/skills',
      description: 'View status of all your skills',
    },
    {
      name: '/getpos',
      description: 'Lost? Maybe coordinates will help.',
    },
    {
      name: '/msg [player] [message]',
      description: 'Message another player privately',
    },
    {
      name: '/balance',
      description: 'View your currency',
    },
    {
      name: '/pay [player] [amount]',
      description: 'Pay another player',
    },
  ]
  return (
    <>
      <Card>
        <Typography level='h3'>Commands:</Typography>
        <Typography>
          The following are a list of helpful in game commands
        </Typography>
        {commands.map(command => (
          <Stack
            key={command.name}
            direction={isMobile ? 'column' : 'row'}
            justifyContent={'space-between'}>
            <Typography key={command.name}>{command.name}</Typography>
            <Typography>{command.description}</Typography>
          </Stack>
        ))}
      </Card>
      <Card
        sx={{
          mt: 2,
        }}>
        <Typography level='h3'>Shaders</Typography>
        <Typography>
          This is Logans totally optional recommendation for Shaders & Texture
          Packs
        </Typography>
        <Typography level='h4'>Shaders:</Typography>
        <Typography>
          <a
            href='https://modrinth.com/shader/complementary-reimagined'
            target='_blank'>
            Complementary Reimainged
          </a>
          <br />
          Once installed, will become available in the bottom left corner of
          your launcher.
        </Typography>
        <Typography level='h4'>Resource Packs:</Typography>
        <Typography>
          <a
            href='https://modrinth.com/shader/complementary-reimagined'
            target='_blank'>
            Default HD x128
          </a>
          <br />
          Once game is launched, <b>Options - Resource Packs</b>, open the
          folder and add the unzipped resource pack then select it from the
          Available menu.
        </Typography>
      </Card>
    </>
  )
}
