import { useIsMobile } from '@/hooks/useBreakpoints'
import { Sheet } from '@mui/joy'

export const Background = () => {
  const isMobile = useIsMobile()

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
      }}>
      {isMobile ? null : (
        <video
          style={{
            width: '100dvw',
            height: '100dvh',
            objectFit: 'cover',
          }}
          autoPlay
          playsInline
          loop
          muted
          disablePictureInPicture>
          <source src='/assets/videoloop.mp4' type='video/mp4' />
        </video>
      )}
    </Sheet>
  )
}
