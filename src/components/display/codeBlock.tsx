import { Typography, TypographyProps } from '@mui/joy'
import { PropsWithChildren } from 'react'

export const CodeBlock = ({
  children,
  sx,
  ...rest
}: PropsWithChildren & TypographyProps) => {
  return (
    <Typography
      {...rest}
      sx={{
        whiteSpace: 'pre-wrap',
        overflowWrap: 'break-word',
        backgroundColor: 'neutral.500',
        color: 'text.primary',
        borderRadius: 4,
        px: 1,
        ...sx,
      }}>
      {children}
    </Typography>
  )
}
