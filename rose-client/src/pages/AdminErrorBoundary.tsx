import {useFetcher, useNavigate} from "react-router-dom";
import Backdrop from "../components/Backdrop.tsx";
import {backdropImage} from "../constants/backdropImage.ts";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Typography
} from "@mui/material";

import AdminBreadcrumbs from "../components/breadcrumbs/AdminBreadcrumbs.tsx";
import PlantListQr from "../components/PlantListQr.tsx";

export default function AdminErrorBoundary() {
  const navigate = useNavigate()
  const fetcher = useFetcher()

  return (<>
      <Backdrop imageUrl={backdropImage} />
      <Dialog open={true} onClose={() => navigate("/admin/roses")}>
        <DialogTitle>Oops!</DialogTitle>

        <DialogContent>
          <Typography>
            Looks like something went wrong!
          </Typography>
          <Typography>
            Please Try Your Request Again Later
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={() => navigate("/admin/roses")}>Admin Rose Index</Button>
        </DialogActions>
      </Dialog>
      <Container
        sx={{
          pt: 1,
          pb: 1,
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <AdminBreadcrumbs />
          <fetcher.Form method="POST" action="/logout">
            <Button type="submit" sx={{ color: '#fff'}} >Log Out</Button>
          </fetcher.Form>
        </Box>
        <Typography variant="h1" color='#fff'>Admin Rose Index</Typography>
        <Paper>
          <PlantListQr plants={[]} onButtonClick={() => {}} />
        </Paper>
      </Container>
    </>
  )
}
