import { Box, Dropdown, Menu, MenuButton, MenuItem } from '@mui/joy'
import { signOut } from 'next-auth/react'
import { OnlineAvatar } from '@/components/display/avatarOnline'
import { useRouter } from 'next/navigation'
import { usePrimaryUser } from '@/providers/userPrimaryProvider'

export const AccountAvatarMenu = () => {
  const { user } = usePrimaryUser()
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
