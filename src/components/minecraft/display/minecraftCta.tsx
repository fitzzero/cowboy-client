import { Button, Card, Stack, Typography } from '@mui/joy'
import { signIn } from 'next-auth/react'

export const MinecraftCta = () => {
  return (
    <Card>
      <Stack direction='column' spacing={1} alignItems='center'>
        <Button color='primary' size='lg' onClick={() => signIn('discord')}>
          Sign in
        </Button>
      </Stack>
      <Typography level='body-lg'>To be added to the allowlist</Typography>
    </Card>
  )
}
