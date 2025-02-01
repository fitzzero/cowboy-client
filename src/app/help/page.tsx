import { Metadata } from 'next'
import { PageWithAuth } from '@/components/layout/pageWithAuth'
import { MinecraftMenu } from '../minecraftMenu'
import { MinecraftHelp } from '@/components/minecraft/layouts/minecraftHelp'

export const metadata: Metadata = {
  title: 'RC MC: Help',
  description: 'An unofficial RC Minecraft server',
}

export default function Home() {
  return (
    <PageWithAuth menu={<MinecraftMenu />}>
      <MinecraftHelp />
    </PageWithAuth>
  )
}
