import { MenuTop } from '@/components/layout/menuTop'
import { Stack, Tab, Tabs, TabList, Typography } from '@mui/joy'
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
          <Tabs aria-label='Disabled tabs' defaultValue={0}>
            <TabList defaultValue={0}>
              <Tab>Home</Tab>
              <Tab disabled>Leaderboard</Tab>
              <Tab disabled>Skills</Tab>
              <Tab disabled>Map</Tab>
            </TabList>
          </Tabs>
        </Stack>
      }
    />
  )
}
