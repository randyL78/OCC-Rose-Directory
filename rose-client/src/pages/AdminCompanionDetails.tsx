import {Alert, Button, Container} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import {routes} from "../constants/routes.ts";
import {CompanionDetails} from "./CompanionDetails.tsx";

export function AdminCompanionDetails() {
  return (
    <>
      <Container sx={{ position: "sticky", top: 0, zIndex: 100 }}>
        <Alert
          severity="warning"
          action={
            <Button component={RouterLink} to={routes.CompanionAdmin}>Return to Admin</Button>
          }
        >
          You are in preview mode.
        </Alert>
      </Container>
      <CompanionDetails />
    </>
  )
}
