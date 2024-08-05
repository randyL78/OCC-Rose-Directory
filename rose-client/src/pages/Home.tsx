import {routes} from "../constants/routes";
import {Link as RouterLink} from "react-router-dom";
import {Box, Container, Link, Typography} from "@mui/material";
import Backdrop from "../components/Backdrop";
import HeroImage from "../components/HeroImage";
import {backdropImage} from "../constants/backdropImage";

  function Home() {
  return (
    <Box
      sx={{
        position: 'relative',
        pb: 4,
        minHeight: '100vh',
      }}
    >
      <Backdrop imageUrl={backdropImage} />
      <Container
        sx={{
          pt: 1,
          pb: 1,
        }}
      >
        <HeroImage imageUrl={backdropImage} />
        <Typography variant="h1" color='#fff'>Home</Typography>
        <Link underline='none' component={RouterLink} to={routes.RoseIndex} color='#fff'>Roses</Link>
      </Container>
    </Box>
  )
}

export default Home;
