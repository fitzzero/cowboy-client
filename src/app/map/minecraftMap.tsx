export const MinecraftLiveMap = () => {
  const now = new Date()
  return (
    <iframe
      src={`https://minecraftmap.techtree.gg/?random=${
        now.getTime() + Math.floor(Math.random() * 1000000)
      }`}
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
