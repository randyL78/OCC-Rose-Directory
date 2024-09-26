import {routes} from "../constants/routes";
import {Link as RouterLink, useActionData, useLocation, useNavigate} from "react-router-dom";
import {Container, IconButton, Link, Typography} from "@mui/material";
import Backdrop from "../components/Backdrop";
import HeroImage from "../components/HeroImage";
import {backdropImage} from "../constants/backdropImage";
import {Login} from "@mui/icons-material";
import {useEffect, useState} from "react";
import LoginPanel from "../components/LoginPanel.tsx";

  function Home() {
    const params = new URLSearchParams(useLocation().search);
    const from = params.get("from") || '/'
    const login = params.get("login")
    const actionData = useActionData() as { error: string } | undefined

    const navigate = useNavigate();

    const [showLogin, setShowLogin] = useState(!!login);

    useEffect(() => {
      setShowLogin(!!login);
    }, [login]);

    const handleCloseLogin = () => {
      params.delete("login");
      setShowLogin(false);
      navigate(`/?${params}`)
    }

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
          <p><Link component={RouterLink} to={routes.RoseIndex} color='#fff'>Rose Directory</Link></p>
          <p><Link component={RouterLink} to={routes.RoseIndex} color='#fff'>Companion Plant Directory</Link></p>
        </Container>
        <LoginPanel open={showLogin} onClose={handleCloseLogin} from={from} errorData={actionData}/>
      </>
    )
}

export default Home;
