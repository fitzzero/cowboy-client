import { Container } from '@mui/joy'

interface PageProps {
  children?: React.ReactNode
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
  menu?: React.ReactNode
}

export const CowboyPage = ({
  children,
  maxWidth = 'md',
  menu = null,
}: PageProps) => {
  return (
    <>
      {menu}
      <Container maxWidth={maxWidth}>{children}</Container>
    </>
  )
}
