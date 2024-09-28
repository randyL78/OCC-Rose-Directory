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
import Backdrop from "../components/Backdrop.tsx";
import {backdropImage} from "../constants/backdropImage.ts";
import AdminBreadcrumbs from "../components/breadcrumbs/AdminBreadcrumbs.tsx";
import {Form, Outlet, useLoaderData} from "react-router-dom";
import PlantListQr from "../components/PlantListQr.tsx";
import {useState} from "react";
import {Download} from "@mui/icons-material";
import {RoseResponse} from "../interfaces/Response.ts";
import {AdminIndexItem} from "../interfaces/AdminIndexItem.ts";
import {AdminIndexContext} from "../constants/adminRoseContext.tsx";
import {PlantTypes} from "../interfaces/PlantTypes.ts";


interface qrModalInfo {
  qrCodeUrl: string;
  name: string;
}

function RoseAdminIndex() {
  const rosesResponse = useLoaderData() as RoseResponse
  let plants: AdminIndexItem[] = []

  if(rosesResponse.data) {
    plants = rosesResponse.data as AdminIndexItem[]
  }

  const [ qrOpen, setQrOpen ] = useState<boolean>(false)
  const [ modalInfo, setModalInfo ] = useState<qrModalInfo>({ qrCodeUrl: '', name: '' })

  const handleOpenModal = (qrCodeUrl: string, name: string) => {
    setModalInfo({ qrCodeUrl, name })
    setQrOpen(true)
  }

  return (
    <>
      <Backdrop imageUrl={backdropImage} />
      <Dialog open={qrOpen} onClose={() => setQrOpen(false)}>
        <DialogTitle>QR Code: {modalInfo.name}</DialogTitle>
        <DialogContent>
          <img src={modalInfo.qrCodeUrl} alt={`QR Code for ${modalInfo.name}`} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setQrOpen(false)}>Close</Button>
          <Button
            aria-label="download"
            component="a"
            startIcon={<Download />}
            href={modalInfo.qrCodeUrl}
            download
          >Download</Button>
        </DialogActions>
      </Dialog>
      <Outlet context={{plants: plants} satisfies AdminIndexContext } />
      <Container
        sx={{
          pt: 1,
          pb: 1,
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <AdminBreadcrumbs path='companion' />
          <Form method="POST" action="/logout">
            <Button type="submit" sx={{ color: '#fff'}} >Log Out</Button>
          </Form>
        </Box>
        <Typography variant="h1" color='#fff'>Admin Companion Index</Typography>
        <Paper>
          <PlantListQr plants={plants} onButtonClick={handleOpenModal} plantType={PlantTypes.COMPANION} />
        </Paper>
      </Container>
    </>
  )
}

export default RoseAdminIndex;
