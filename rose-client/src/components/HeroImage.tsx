import {Box, Paper} from "@mui/material";
import {ReactNode} from "react";

interface HeroImageProps {
  imageUrl: string;
  breadcrumb?: ReactNode
}

function HeroImage({imageUrl, breadcrumb}: HeroImageProps) {
  return (
    <Paper
      data-testid="hero-image"
      elevation={3}
      sx={{
        position: 'relative',
        minHeight: '33vh',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      { breadcrumb && (
      <Box data-testid="bread-container" sx={{ p: 1 }}>
        {breadcrumb}
      </Box>
    )}
    </Paper>
  )
}

export default HeroImage;
