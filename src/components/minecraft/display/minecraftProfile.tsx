'use client'

import {
  Avatar,
  Badge,
  FormControl,
  FormHelperText,
  Input,
  Card,
  Stack,
  CardContent,
} from '@mui/joy'
import { useState } from 'react'
import RotateLeftIcon from '@mui/icons-material/RotateLeft'
import ErrorIcon from '@mui/icons-material/Error'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Prisma } from '@prisma/client'
import { useMinecraftNameUpdate } from '@/hooks/useMinecraft'
import { MinecraftUserAvatar } from './minecraftUserAvatar'
import { MinecraftMyStats } from './minecraftMyStats'
import { useIsMobile } from '@/hooks/useBreakpoints'

export const MinecraftUserProfile = ({
  user,
}: {
  user: Prisma.UserGetPayload<{ include: { minecraft: true } }>
}) => {
  const isMobile = useIsMobile()
  const { state, createOrUpdate, isLoading } = useMinecraftNameUpdate(
    user?.minecraft || null
  )

  const [inputValue, setInputValue] = useState<string>(
    user.minecraft?.name || ''
  )
  const isError = state.code && state.code != '200' ? true : false

  if (!user) return null

  const handleUpdate = () => {
    if (!inputValue) return
    if (inputValue === state.data?.name) return
    createOrUpdate({ name: inputValue, userId: user.id })
  }

  return (
    <Card>
      <CardContent>
        <Stack direction='row' alignItems='center' spacing={2} pb={1}>
          <MinecraftUserAvatar
            user={user}
            minecraft={state.data || undefined}
          />
          <FormControl error={isError}>
            <Input
              sx={{
                width: isMobile ? '70%' : undefined,
              }}
              size='lg'
              color='primary'
              variant='soft'
              placeholder='Minecraft Username'
              value={inputValue}
              onChange={event => setInputValue(event.target.value)}
              onBlur={handleUpdate}
              endDecorator={
                isLoading ? (
                  <RotateLeftIcon fontSize='small' />
                ) : isError ? (
                  <ErrorIcon fontSize='small' />
                ) : (
                  <CheckCircleIcon fontSize='small' />
                )
              }
            />
            {isError ? <FormHelperText>{state?.message}</FormHelperText> : null}
          </FormControl>
        </Stack>
        <MinecraftMyStats userId={user.id} />
      </CardContent>
    </Card>
  )
}
