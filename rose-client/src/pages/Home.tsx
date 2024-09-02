import {routes} from "../constants/routes";
import {Link as RouterLink} from "react-router-dom";
import {Container, IconButton, Link, Typography} from "@mui/material";
import Backdrop from "../components/Backdrop";
import HeroImage from "../components/HeroImage";
import {backdropImage} from "../constants/backdropImage";
import {Login} from "@mui/icons-material";

  function Home() {
    return (
      <>
        <Backdrop imageUrl={backdropImage} />
        <Container
          sx={{
            pt: 1,
            pb: 1,
          }}
        >
          <IconButton
            component={RouterLink}
            to={routes.RoseAdmin}
            aria-label='admin access'
            size="large"
            color="success"
            sx={{
              display: { xs: 'none', sm: 'block' },
              position: 'absolute',
              bottom: 10,
              right: 10
            }}
          >
            <Login />
          </IconButton>
          <HeroImage imageUrl={backdropImage} />
          <Typography variant="h1" color='#fff'>Old City Cemetery</Typography>
          <Link underline='none' component={RouterLink} to={routes.RoseIndex} color='#fff'>Rose Directory</Link>
        </Container>
      </>
    )
}

export default Home;
