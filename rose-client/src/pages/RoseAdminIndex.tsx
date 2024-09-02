import {Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Typography} from "@mui/material";
import Backdrop from "../components/Backdrop.tsx";
import {backdropImage} from "../constants/backdropImage.ts";
import AdminRoseBreadcrumbs from "../components/breadcrumbs/AdminRoseBreadcrumbs.tsx";
import {useLoaderData} from "react-router-dom";
import {RoseIndexItem} from "../interfaces/RoseIndexItem.ts";
import RoseListQr from "../components/RoseListQr.tsx";
import {useState} from "react";
import {Download} from "@mui/icons-material";

interface qrModalInfo {
  qrCodeUrl: string;
  name: string;
}

function RoseAdminIndex() {
  const roses = useLoaderData() as RoseIndexItem[]

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
      <Container
        sx={{
          pt: 1,
          pb: 1,
        }}
      >
        <AdminRoseBreadcrumbs />
        <Typography variant="h1" color='#fff'>Admin Rose Index</Typography>
        <Paper>
          <RoseListQr roses={roses} onButtonClick={handleOpenModal} />
        </Paper>
      </Container>
    </>
  )
}

export default RoseAdminIndex;
