import { Container, Sheet } from '@mui/joy'

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
        <Sheet
          sx={{
            p: 2,
            backgroundColor: 'background.level1',
            borderRadius: 8,
          }}>
          {children}
        </Sheet>
      </Container>
    </>
  )
}
