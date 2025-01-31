import { Metadata } from 'next'
import { PageWithAuth } from '@/components/layout/pageWithAuth'
import { MinecraftMenu } from './minecraftMenu'
import { MinecraftHome } from '@/components/minecraft/minecraftHome'

export const metadata: Metadata = {
  title: 'RC MC',
  description: 'An unofficial RC Minecraft server',
}

export default function Home() {
  return (
    <PageWithAuth menu={<MinecraftMenu />}>
      <MinecraftHome />
    </PageWithAuth>
  )
}
