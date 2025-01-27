'use client'

import { CowboyPage } from '@/components/layout/cowboyPage'
import { Typography } from '@mui/joy'
import { ExampleMenu } from './exampleMenu'

export default function Home() {
  return (
    <CowboyPage menu={<ExampleMenu />}>
      <Typography>Welcome to Cowboy!</Typography>
    </CowboyPage>
  )
}
