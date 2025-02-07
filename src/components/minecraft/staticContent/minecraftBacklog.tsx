import { Card, CardContent, Stack, Typography } from '@mui/joy'

interface Backlog {
  name: string
  description: string
}
export const MinecraftBacklog = () => {
  const backlog: Backlog[] = [
    {
      name: 'Documentation',
      description: 'Better documentation for how to use all the things',
    },
    {
      name: 'Economy',
      description: 'Earn money, open shops, trade with players.',
    },
    {
      name: 'Bosses',
      description:
        'There are more difficult higher level mobs, but looking to add new custom bosses as well.',
    },
    {
      name: 'Clans',
      description:
        'Support for clans to display in chat and on leaderboard. Ability to define protected regions that only clan members can edit blocks within.',
    },
    {
      name: 'Discord Integrations',
      description:
        'Get server commands and updates within your discord server.',
    },
  ]
  return (
    <Card>
      <CardContent>
        <Typography level='h3'>Upcoming Features (Backlog)</Typography>
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
      </CardContent>
    </Card>
  )
}
