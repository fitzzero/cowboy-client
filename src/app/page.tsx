import { Typography } from '@mui/joy'
import { ExampleMenu } from './exampleMenu'
import { Metadata } from 'next'
import { PageUser } from '@/components/layout/pageUser'

export const metadata: Metadata = {
  title: 'Cowboy Client',
  description:
    'Simple Next.js framework for a Prisma.io + Socket.io + Joy UI client',
}

export default function Home() {
  return (
    <PageUser menu={<ExampleMenu />}>
      <Typography>Welcome to Cowboy!</Typography>
    </PageUser>
  )
}
