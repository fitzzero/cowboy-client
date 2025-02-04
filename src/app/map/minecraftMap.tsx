export const MinecraftLiveMap = () => {
  return (
    <iframe
      src='https://minecraftmap.techtree.gg/'
      width='100%'
      height='100%'
      frameBorder={0}
      style={{
        minHeight: 'calc(100dvh - 100px)',
        borderRadius: 8,
        border: '2px solid rgb(0, 0, 0, 0.8)',
      }}
    />
  )
}
