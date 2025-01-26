import { CowboyImage } from '@/components/cowboyImage'
import { CowboyMenuTop } from '@/components/cowboyMenuTop'
import { Typography } from '@mui/joy'

export const ExampleMenu = () => {
  return (
    <CowboyMenuTop
      branding={
        <>
          <CowboyImage src='/cowboy_color.png' alt='logo' height={42} />
          <Typography level='title-lg'>Cowboy</Typography>
        </>
      }
    />
  )
}
