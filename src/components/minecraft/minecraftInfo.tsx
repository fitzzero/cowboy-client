import { Card, Typography } from '@mui/joy'

export const MinecraftInfo = () => {
  return (
    <Card>
      <Typography level='h3'>About</Typography>
      <Typography level='body-lg'>
        An casual Minecraft server hosted by{' '}
        <a href='https://about.rallycry.gg' target='_blank'>
          Rally Cry
        </a>{' '}
        employees for anybody to enjoy. Mostly vanilla with some MMORPG mods.
      </Typography>
      <Typography level='h3'>Rules</Typography>
      <Typography level='body-lg'>
        1. Be respectful.
        <br />
        2. No griefing or stealing from other players.
        <br />
        3. No cheating, hacking, or exploiting.
        <br />
        4. No spamming or advertising.
        <br />
        5. No inappropriate content or behavior.
      </Typography>
    </Card>
  )
}
