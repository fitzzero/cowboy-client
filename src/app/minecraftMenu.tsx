import { MenuTop } from '@/components/layout/menuTop'
import { Stack, Typography } from '@mui/joy'
import FlagIcon from '@mui/icons-material/Flag'

export const MinecraftMenu = () => {
  return (
    <MenuTop
      branding={
        <Stack direction='row' spacing={1} alignItems='center'>
          <FlagIcon
            color='primary'
            sx={{
              fontSize: '1.3rem',
            }}
          />
          <Typography level='title-lg'>RC MC</Typography>
        </Stack>
      }
    />
  )
}
