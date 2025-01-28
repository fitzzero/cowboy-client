import { Box, ColorPaletteProp, Sheet, Stack, Typography } from '@mui/joy'
import { ExampleMenu } from '../exampleMenu'
import { PageUser } from '@/components/layout/pageUser'

const StylePalette = () => {
  const palettes: ColorPaletteProp[] = [
    'primary',
    'neutral',
    'success',
    'warning',
    'danger',
  ]
  const weights = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

  return (
    <PageUser menu={<ExampleMenu />}>
      <Typography level='h3'>Primary Palette</Typography>
      <Stack direction='column' spacing={2}>
        {palettes.map(palette => (
          <Box key={palette}>
            <Typography level='body-lg' color={palette}>
              {palette}
            </Typography>
            <Stack direction='row' spacing={2}>
              {weights.map(weight => (
                <Sheet
                  key={weight}
                  sx={{
                    backgroundColor: `${palette}.${weight}`,
                    color: 'text.primary',
                    width: 50,
                    height: 50,
                  }}>
                  {weight}
                </Sheet>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </PageUser>
  )
}

export default StylePalette
