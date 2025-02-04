import { Metadata } from 'next'
import { PageWithAuth } from '@/components/layout/pageWithAuth'
import { MinecraftMenu } from '../minecraftMenu'
import { MinecraftLiveMap } from './minecraftMap'

export const metadata: Metadata = {
  title: 'RC MC: Map',
  description: 'An unofficial RC Minecraft server',
}

export default function Map() {
  return (
    <PageWithAuth menu={<MinecraftMenu />} maxWidth='xl'>
      <MinecraftLiveMap />
    </PageWithAuth>
  )
}
