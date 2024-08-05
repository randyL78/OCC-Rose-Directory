import {Box, Paper} from "@mui/material";

interface Props {
  colorPrimary: string
  colorSecondary?: string
}

function ColorIndicator({colorPrimary, colorSecondary} : Props) {
  return (
    <Paper elevation={6} sx={{width: '200px', margin: 'auto'}}>
      <Box sx={{
        backgroundColor: colorPrimary,
        height: '75px',
        margin: 'auto',
        width: '200px',
      }} >{
        colorSecondary && (
          <Box sx={{
            borderStyle: 'solid',
            borderColor: `transparent transparent ${colorSecondary} transparent`,
            borderWidth: '0 0 75px 200px',
            height: '0',
            margin: 'auto',
            width: '0',
          }} />
        )
      }
      </Box>
    </Paper>
  )
}

export default ColorIndicator;
