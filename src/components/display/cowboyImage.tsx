interface ImageProps {
  src: string
  alt: string
  width?: string | number
  height?: string | number
}

export const CowboyImage = ({ src, alt, width, height }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: width || '100%',
        height: height || '100%',
      }}
    />
  )
}
