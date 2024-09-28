import Backdrop from "../components/Backdrop.tsx";
import {backdropImage} from "../constants/backdropImage.ts";
import AdminBreadcrumbs from "../components/breadcrumbs/AdminBreadcrumbs.tsx";
import {Box, Button, Container, Link, Paper, Typography} from "@mui/material";
import {Form, Link as RouterLink} from "react-router-dom";
import {routes} from "../constants/routes.ts";

export function Admin() {
  return (
    <>
      <Backdrop imageUrl={backdropImage} />
      <Container
        sx={{
          pt: 1,
          pb: 1,
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <AdminBreadcrumbs/>
          <Form method="POST" action="/logout">
            <Button type="submit" sx={{color: '#fff'}}>Log Out</Button>
          </Form>
        </Box>
        <Typography variant="h1" color='#fff'>Admin</Typography>
        <Paper>
          <Box p={2}>
            <p><Link component={RouterLink} to={routes.RoseAdmin}>Rose Admin Index</Link></p>
            <p><Link component={RouterLink} to={routes.CompanionAdmin}>Companion Admin Index</Link></p>
          </Box>
        </Paper>
      </Container>
    </>
  )
}
