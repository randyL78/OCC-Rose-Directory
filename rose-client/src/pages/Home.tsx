import {routes} from "../constants/routes";
import {Link as RouterLink} from "react-router-dom";
import {Container, IconButton, Link, Typography} from "@mui/material";
import Backdrop from "../components/Backdrop";
import HeroImage from "../components/HeroImage";
import {backdropImage} from "../constants/backdropImage";
import {useState} from "react";
import {Login} from "@mui/icons-material";
import LoginPanel from "../components/LoginPanel.tsx";

  function Home() {
    const [showSignIn, setShowSignIn] = useState(false);

    return (
      <>
        <Backdrop imageUrl={backdropImage} />
        <Container
          sx={{
            pt: 1,
            pb: 1,
          }}
        >
          {!showSignIn && <IconButton
            onClick={() => setShowSignIn(true)}
            aria-label='log in'
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
          </IconButton>}
          <HeroImage imageUrl={backdropImage} />
          <Typography variant="h1" color='#fff'>Old City Cemetery</Typography>
          <Link underline='none' component={RouterLink} to={routes.RoseIndex} color='#fff'>Rose Directory</Link>
        </Container>
        <LoginPanel open={showSignIn} onClose={() => setShowSignIn(false)} />
      </>
    )
}

export default Home;
