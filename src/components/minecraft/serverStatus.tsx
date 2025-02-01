import { Card, Skeleton, Stack, Typography } from '@mui/joy'
import { CodeBlock } from '../display/codeBlock'
import PlaceIcon from '@mui/icons-material/Place'
import GroupIcon from '@mui/icons-material/Group'
import UpgradeIcon from '@mui/icons-material/Upgrade'
import axios from 'axios'
import { useEffect, useState } from 'react'

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
  const [status, setStatus] = useState<ServerStatus | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const address = 'mc.rally.gg'

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await axios.get(
          `https://api.mcsrvstat.us/2/${address}`
        )
        setStatus(response.data)
      } catch (err: any) {
        setError('Failed to fetch server status')
      } finally {
        setLoading(false)
      }
    }

    fetchServerStatus()
  }, [])

  return (
    <Card>
      <Stack direction='column' spacing={1}>
        <Stack direction='row' spacing={1} alignItems='center'>
          <PlaceIcon />
          <Typography>IP:</Typography>
          <CodeBlock>{address}</CodeBlock>
        </Stack>
        <Stack direction='row' spacing={1} alignItems='center'>
          <UpgradeIcon />
          <Typography>Version:</Typography>
          <CodeBlock>Java Edition {status?.version}</CodeBlock>
        </Stack>
        <Stack direction='row' spacing={1} alignItems='center'>
          <GroupIcon />
          <Typography>Status:</Typography>
          {loading ? (
            <Skeleton />
          ) : status?.online ? (
            <CodeBlock>
              {status?.players?.online}/{status?.players?.max}
            </CodeBlock>
          ) : (
            <Typography color='danger'>Offline</Typography>
          )}
        </Stack>
      </Stack>
    </Card>
  )
}
