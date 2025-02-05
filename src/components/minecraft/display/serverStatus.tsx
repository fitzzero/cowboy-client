import { Card, CardContent, Skeleton, Stack, Typography } from '@mui/joy'
import PlaceIcon from '@mui/icons-material/Place'
import GroupIcon from '@mui/icons-material/Group'
import UpgradeIcon from '@mui/icons-material/Upgrade'
import { CodeBlock } from '@/components/display/codeBlock'
import { useServerStatus } from '@/hooks/useMinecraftServer'
import { useIsMobile } from '@/hooks/useBreakpoints'

interface ServerStatus {
  online: boolean
  players: {
    online: number
    max: number
  }
  version: string
  motd: {
    clean: string[]
  }
}

export const MinecraftServerStatus = () => {
  const { status, isLoading } = useServerStatus()
  const isMobile = useIsMobile()

  return (
    <Card>
      <CardContent>
        <Stack direction='column' spacing={1}>
          <Stack direction='row' spacing={1} alignItems='center'>
            <PlaceIcon />
            <Typography>IP:</Typography>
            <CodeBlock>mc.rally.gg</CodeBlock>
          </Stack>
          <Stack direction='row' spacing={1} alignItems='center'>
            <UpgradeIcon />
            <Typography>Version:</Typography>
            <CodeBlock>
              {isMobile ? 'JE' : 'Java Edition'} {status?.version}
            </CodeBlock>
          </Stack>
          <Stack direction='row' spacing={1} alignItems='center'>
            <GroupIcon />
            <Typography>Status:</Typography>
            <Skeleton
              loading={isLoading}
              variant='text'
              level='body-md'
              width={100}
            />
            {status?.online ? (
              <CodeBlock>
                {status?.players?.online}/{status?.players?.max}
              </CodeBlock>
            ) : !isLoading && !status?.online ? (
              <Typography color='danger'>Offline</Typography>
            ) : null}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
