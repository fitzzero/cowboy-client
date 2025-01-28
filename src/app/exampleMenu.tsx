import { CowboyImage } from '@/components/display/cowboyImage'
import { CowboyMenuTop } from '@/components/layout/menuTop'
import { Stack, Typography } from '@mui/joy'

export const ExampleMenu = () => {
  return (
    <CowboyMenuTop
      branding={
        <Stack direction='row' spacing={2} alignItems='center'>
          <CowboyImage src='/cowboy_color.png' alt='logo' height={42} />
          <Typography level='title-lg'>Cowboy</Typography>
        </Stack>
      }
    />
  )
}
