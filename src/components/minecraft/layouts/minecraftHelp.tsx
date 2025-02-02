'use client'

import { Card, Stack, Typography } from '@mui/joy'

interface ServerCommand {
  name: string
  description: string
}
export const MinecraftHelp = () => {
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
    <Card>
      <Typography level='h3'>Commands:</Typography>
      <Typography>
        The following are a list of helpful in game commands
      </Typography>
      {commands.map(command => (
        <Stack
          key={command.name}
          direction='row'
          justifyContent={'space-between'}>
          <Typography key={command.name}>{command.name}</Typography>
          <Typography>{command.description}</Typography>
        </Stack>
      ))}
    </Card>
  )
}
