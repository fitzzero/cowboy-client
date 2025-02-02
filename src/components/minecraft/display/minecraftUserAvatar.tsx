import { Avatar, AvatarProps, Badge, Tooltip } from '@mui/joy'
import { Minecraft, User } from '@prisma/client'

interface MinecraftUserAvatarProps extends AvatarProps {
  user: User
  minecraft?: Minecraft
}

export const MinecraftUserAvatar = ({
  user,
  minecraft,
  sx,
  ...restOfAvatarProps
}: MinecraftUserAvatarProps) => {
  return (
    <Badge
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant='plain'
      badgeContent={
        <Tooltip title={user.name} placement='top-start'>
          <Avatar
            alt='Remy Sharp'
            src={user.image || ''}
            sx={{ '--Avatar-size': '24px' }}
          />
        </Tooltip>
      }
      badgeInset='0%'
      sx={{ '--Badge-paddingX': '0px', marginBottom: '12px' }}>
      <Avatar
        alt='Travis Howard'
        src={minecraft?.image || '/assets/steve.jpg'}
        size='lg'
        sx={{
          ...sx,
          borderRadius: 4,
        }}
        {...restOfAvatarProps}
      />
    </Badge>
  )
}
