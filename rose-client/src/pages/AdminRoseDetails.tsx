import RoseDetails from "./RoseDetails.tsx";
import {Alert, Button, Container} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import {routes} from "../constants/routes.ts";

export function AdminRoseDetails() {
  return (
    <>
      <Container>
        <Alert
          severity="warning"
          action={
            <Button component={RouterLink} to={routes.RoseAdmin}>Return to Admin</Button>
          }
        >
          You are in preview mode.
        </Alert>
      </Container>
      <RoseDetails />
    </>
  )
}
