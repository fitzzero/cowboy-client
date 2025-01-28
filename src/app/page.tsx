import { PageStandard } from '@/components/layout/pageStandard'
import { Typography } from '@mui/joy'
import { ExampleMenu } from './exampleMenu'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cowboy Client',
  description:
    'Simple Next.js framework for a Prisma.io + Socket.io + Joy UI client',
}

export default function Home() {
  return (
    <PageStandard menu={<ExampleMenu />}>
      <Typography>Welcome to Cowboy!</Typography>
    </PageStandard>
  )
}
