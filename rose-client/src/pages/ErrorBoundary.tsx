import Backdrop from "../components/Backdrop.tsx";
import {backdropImage} from "../constants/backdropImage.ts";
import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton, Link,
  Typography
} from "@mui/material";
import {Login} from "@mui/icons-material";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {routes} from "../constants/routes.ts";
import HeroImage from "../components/HeroImage.tsx";

export default function ErrorBoundary() {
  const navigate = useNavigate();

  return (<>
      <Backdrop imageUrl={backdropImage} />
      <Dialog open={true} onClose={() => navigate("/roses")}>
        <DialogTitle>Oops!</DialogTitle>

        <DialogContent>
          <Typography>
            Looks like something went wrong!
          </Typography>
          <Typography>
            Why don't you try looking at one
            of these roses instead?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={() => navigate("/roses")}>Rose Directory</Button>
        </DialogActions>
      </Dialog>
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
