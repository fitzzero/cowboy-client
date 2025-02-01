import { Card, Stack, Typography } from '@mui/joy'

interface Backlog {
  name: string
  description: string
}
export const MinecraftBacklog = () => {
  const backlog: Backlog[] = [
    {
      name: 'New Spawn',
      description: 'A real spawn area with central services (ie exchange)',
    },
    {
      name: 'Leaderboard',
      description:
        'Live leaderboard to see top players either by total level or by skill/currency.',
    },
    {
      name: 'Map',
      description: 'Live map of the world',
    },
    {
      name: 'Documentation',
      description: 'Better documentation for how to use all the things',
    },
    {
      name: 'Clans',
      description:
        'Support for clans to display in chat and on leaderboard. Ability to define protected regions that only clan members can edit blocks within.',
    },
  ]
  return (
    <Card>
      <Typography level='h3'>Upcoming Features</Typography>
      <Stack direction='column' spacing={2}>
        {backlog.map(item => (
          <Stack
            key={item.name}
            direction='column'
            justifyContent={'space-between'}>
            <Typography color='primary'>{item.name}</Typography>
            <Typography>{item.description}</Typography>
          </Stack>
        ))}
      </Stack>
    </Card>
  )
}
