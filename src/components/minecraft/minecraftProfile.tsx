'use client'

import {
  Avatar,
  Badge,
  FormControl,
  FormHelperText,
  Input,
  Card,
  Stack,
} from '@mui/joy'
import { useState } from 'react'
import RotateLeftIcon from '@mui/icons-material/RotateLeft'
import ErrorIcon from '@mui/icons-material/Error'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Minecraft, Prisma } from '@prisma/client'
import { useAction } from '@/hooks/useAction'
import {
  minecraftCreateOrUpdateByName,
  MinecraftCreateOrUpdateByNameProps,
} from '@/cowboy-database/minecraft'
import { useMinecraftNameUpdate } from '@/hooks/useMinecraft'

export const MinecraftUserProfile = ({
  user,
}: {
  user: Prisma.UserGetPayload<{ include: { minecraft: true } }>
}) => {
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
    createOrUpdate({ name: inputValue, userId: user.id })
  }

  return (
    <Card>
      <Stack direction='row' alignItems='center' spacing={2} pb={1}>
        <Badge
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant='plain'
          badgeContent={
            <Avatar
              alt='Remy Sharp'
              src={user?.image || ''}
              sx={{ '--Avatar-size': '24px' }}
            />
          }
          badgeInset='14%'
          sx={{ '--Badge-paddingX': '0px' }}>
          <Avatar alt='Travis Howard' src={user?.image || ''} size='lg' />
        </Badge>
        <FormControl error={isError}>
          <Input
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
    </Card>
  )
}
