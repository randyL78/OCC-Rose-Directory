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
import AdminRoseBreadcrumbs from "../components/breadcrumbs/AdminRoseBreadcrumbs.tsx";
import {Outlet, useFetcher, useLoaderData, useNavigate} from "react-router-dom";
import RoseListQr from "../components/RoseListQr.tsx";
import {useState} from "react";
import {Create, Download} from "@mui/icons-material";
import { RoseResponse} from "../interfaces/Response.ts";
import {RoseQrItem} from "../interfaces/RoseQrItem.ts";


interface qrModalInfo {
  qrCodeUrl: string;
  name: string;
}

function RoseAdminIndex() {
  const rosesResponse = useLoaderData() as RoseResponse
  let roses: RoseQrItem[] = []

  if(rosesResponse.data) {
    roses = rosesResponse.data as RoseQrItem[]
  }

  const fetcher = useFetcher()
  const navigate = useNavigate()

  const [ qrOpen, setQrOpen ] = useState<boolean>(false)
  const [ modalInfo, setModalInfo ] = useState<qrModalInfo>({ qrCodeUrl: '', name: '' })

  const handleOpenModal = (qrCodeUrl: string, name: string) => {
    setModalInfo({ qrCodeUrl, name })
    setQrOpen(true)
  }

  const handleCreate = () => {
    navigate('/admin/roses/create')
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
      <Outlet />
      <Container
        sx={{
          pt: 1,
          pb: 1,
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <AdminRoseBreadcrumbs />
          <fetcher.Form method="POST" action="/logout">
            <Button type="submit" sx={{ color: '#fff'}} >Log Out</Button>
          </fetcher.Form>
        </Box>
        <Typography variant="h1" color='#fff'>Admin Rose Index</Typography>
        <Paper>
          <Box display="flex" justifyContent="end">
            <Button
              startIcon={<Create />}
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2, mr: 2}}
              onClick={handleCreate}
            >
              Create
            </Button>
          </Box>
          <RoseListQr roses={roses} onButtonClick={handleOpenModal} />
        </Paper>
      </Container>
    </>
  )
}

export default RoseAdminIndex;
