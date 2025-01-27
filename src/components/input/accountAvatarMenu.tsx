import { Box, Dropdown, Menu, MenuButton, MenuItem } from '@mui/joy'
import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'
import { OnlineAvatar } from '@/components/display/avatarOnline'
import { useRouter } from 'next/navigation'

export const AccountAvatarMenu = () => {
  const user: User | undefined = undefined
  const router = useRouter()
  return user ? (
    <Dropdown>
      <MenuButton
        component={Box}
        sx={{
          p: 0,
          border: 'none',
          '&:hover': {
            background: 'none',
          },
        }}>
        <OnlineAvatar user={user} error={!user} />
      </MenuButton>
      <Menu>
        <MenuItem onClick={() => router.push('/user')}>Profile</MenuItem>
        <MenuItem onClick={() => signOut()}>Logout</MenuItem>
      </Menu>
    </Dropdown>
  ) : null
}
