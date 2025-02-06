import { Alert, Container } from '@mui/joy'
import { DoubleXpCountdown } from '../minecraft/display/doubleXp'

export interface PageProps {
  children?: React.ReactNode
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
  menu?: React.ReactNode
}

export const Page = ({ children, maxWidth = 'md', menu = null }: PageProps) => {
  return (
    <>
      {menu}
      <Container maxWidth={maxWidth}>
        <Alert
          color='warning'
          variant='solid'
          sx={{
            mb: 2,
            '& .MuiTypography-root': {
              color: '#000',
            },
          }}>
          <DoubleXpCountdown />
        </Alert>
        {children}
      </Container>
    </>
  )
}
