import { Typography } from '@mui/joy'
import { ExampleMenu } from './exampleMenu'
import { Metadata } from 'next'
import { PageWithAuth } from '@/components/layout/pageWithAuth'

export const metadata: Metadata = {
  title: 'Cowboy Client',
  description:
    'Simple Next.js framework for a Prisma.io + Socket.io + Joy UI client',
}

export default function Home() {
  return (
    <PageWithAuth menu={<ExampleMenu />}>
      <Typography>Welcome to Cowboy!</Typography>
    </PageWithAuth>
  )
}
