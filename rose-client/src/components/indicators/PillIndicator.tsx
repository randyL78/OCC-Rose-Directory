import {Box} from "@mui/material";

interface PillIndicatorProps {
  totalBoxes: number
  filledBoxes: number
  emptyColor?: string
  filledColor?: string
}

interface PillIndicatorBoxProps {
  totalBoxes: number
  filled: boolean
  index: number
  color: string
}

function PillIndicatorBox({index, totalBoxes, filled, color}: PillIndicatorBoxProps) {
  let brl = '0'
  let brr = '0'
  if (index === 0) {
    brl = '12px'
  }

  const lastBox = index === totalBoxes - 1
  if (lastBox) {
    brr = '12px'
  }
  const borderRadius = `${brl} ${brr} ${brr} ${brl}`

  return (
    <Box
      data-testid={filled ? "filled-pill" : "empty-pill"}
      sx={{
        backgroundClip: 'padding-box',
        borderRight: lastBox ? 'none' : '2px solid transparent',
        flex: 1,
        height: '20px',
        borderRadius,
        backgroundColor: color
      }}
    />
  )
}

function PillIndicator(
  {totalBoxes,
    filledBoxes,
    filledColor = 'black',
    emptyColor = 'white',
  } : PillIndicatorProps
) {
  return(
    <Box sx={{
      display: 'flex',
      margin: 'auto',
      mb: 2,
      width: '200px',
    }}>
      {
        [...Array(totalBoxes)].map((_, i) => {
          const filled = i < filledBoxes
          const color = filled ? filledColor : emptyColor

          return (
            <PillIndicatorBox key={i} index={i} filled={filled} totalBoxes={totalBoxes} color={color}/>
          )
        })
      }
    </Box>
  )
}

export default PillIndicator;
