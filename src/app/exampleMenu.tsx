import { MenuTop } from '@/components/layout/menuTop'
import { Stack, Typography } from '@mui/joy'
import Image from 'next/image'

export const ExampleMenu = () => {
  return (
    <MenuTop
      branding={
        <Stack direction='row' spacing={2} alignItems='center'>
          <Image src='/cowboy_color.png' alt='Cowboy' width={32} height={32} />
          <Typography level='title-lg'>Cowboy</Typography>
        </Stack>
      }
    />
  )
}
