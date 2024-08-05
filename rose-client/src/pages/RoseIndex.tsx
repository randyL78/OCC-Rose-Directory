import {Link} from "react-router-dom";
import {routes} from "../constants/routes.ts";
import {Box, Container, Paper, Typography} from "@mui/material";
import Backdrop from "../components/Backdrop.tsx";
import {backdropImage} from "../constants/backdropImage.ts";
import RoseBreadcrumbs from "../components/RoseBreadcrumbs.tsx";

function RoseIndex() {
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
        <RoseBreadcrumbs color="#111" />
        <Typography variant="h1">Roses</Typography>
        <Paper sx={{p: 2}}>
          <Link to={`${routes.RoseIndex}/cromoisi-superieur`} >Cromoisi Superieur</Link>
        </Paper>
      </Container>
    </Box>
  )
}

export default RoseIndex;
