import { Sheet } from '@mui/joy'

export const Background = () => {
  return (
    <Sheet
      sx={{
        backgroundImage: 'url(/assets/mc-night.webp)',
        backgroundSize: 'cover',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100dvw',
        height: '100dvh',
        zIndex: -1,
      }}
    />
  )
}
