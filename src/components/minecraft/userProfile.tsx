'use client'

import { useMinecraftProfileCreate } from '@/hooks/useMinecraft'
import { usePrimaryUser } from '@/hooks/useUser'
import {
  Avatar,
  Badge,
  FormControl,
  FormHelperText,
  Input,
  Sheet,
  Stack,
} from '@mui/joy'
import { useState } from 'react'
import RotateLeftIcon from '@mui/icons-material/RotateLeft'
import ErrorIcon from '@mui/icons-material/Error'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

export const MinecraftUserProfile = () => {
  const { createProfile, loading, error } = useMinecraftProfileCreate()
  const [value, setValue] = useState<string>('')
  const user = usePrimaryUser()
  console.log(user)

  const handleUpdate = () => {
    if (!value) return
    createProfile(value)
  }

  return (
    <Sheet
      sx={{
        background: 'rgb(0,0,0, 0.8)',
        p: 2,
        borderRadius: 4,
      }}>
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
        <FormControl error={!!error}>
          <Input
            size='lg'
            color='primary'
            variant='soft'
            placeholder='Minecraft Username'
            value={value}
            onChange={event => setValue(event.target.value)}
            onBlur={handleUpdate}
            endDecorator={
              loading ? (
                <RotateLeftIcon fontSize='small' />
              ) : error ? (
                <ErrorIcon fontSize='small' />
              ) : (
                <CheckCircleIcon fontSize='small' />
              )
            }
          />
          {error ? <FormHelperText>{error}</FormHelperText> : null}
        </FormControl>
      </Stack>
    </Sheet>
  )
}
