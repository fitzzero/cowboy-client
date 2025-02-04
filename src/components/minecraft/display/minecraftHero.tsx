import { AspectRatio, Card } from '@mui/joy'
import { useRouter } from 'next/navigation'

export const MinecraftHero = () => {
  const router = useRouter()
  return (
    <AspectRatio ratio='16/9'>
      <Card></Card>
    </AspectRatio>
  )
}
