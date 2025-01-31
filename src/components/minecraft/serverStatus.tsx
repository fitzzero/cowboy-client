import { Card, Stack, Typography } from '@mui/joy'
import { CodeBlock } from '../display/codeBlock'
import PlaceIcon from '@mui/icons-material/Place'
import GroupIcon from '@mui/icons-material/Group'
import UpgradeIcon from '@mui/icons-material/Upgrade'

export const MinecraftServerStatus = () => {
  return (
    <Card>
      <Stack direction='column' spacing={1}>
        <Stack direction='row' spacing={1} alignItems='center'>
          <PlaceIcon />
          <Typography>IP:</Typography>
          <CodeBlock>mc.rally.gg</CodeBlock>
        </Stack>
        <Stack direction='row' spacing={1} alignItems='center'>
          <UpgradeIcon />
          <Typography>Version:</Typography>
          <CodeBlock>1.21.4</CodeBlock>
        </Stack>
        <Stack direction='row' spacing={1} alignItems='center'>
          <GroupIcon />
          <Typography>Status:</Typography>
          <CodeBlock>1/50</CodeBlock>
        </Stack>
      </Stack>
    </Card>
  )
}
