import {
  Avatar, Button,
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText
} from "@mui/material";
import {RoseQrItem} from "../interfaces/RoseQrItem.ts";
import {Create, Delete, Download, Edit, QrCode, Visibility} from "@mui/icons-material";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {routes} from "../constants/routes.ts";

interface Props {
  roses: RoseQrItem[];
  onButtonClick: (qrCodeUrl: string, name: string) => void;
}

function RoseListQr({ roses, onButtonClick }: Props) {
  const navigate = useNavigate()

  const handleCreate = () => {
    navigate('/admin/roses/create')
  }

  return (
    <List>
      <ListItem key='header'
        secondaryAction={
        <ButtonGroup>
          <Button
            startIcon={<Create />}
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleCreate}
          >
            Create
          </Button>
        </ButtonGroup>
        }
      >
        <ListItemButton>
          <ListItemAvatar>
            <QrCode />
          </ListItemAvatar>
          <ListItemText primary="Name" />
          <ListItemText primary="Slug" />
        </ListItemButton>
      </ListItem>
      {
        roses.map((rose) => (
          <ListItem
            key={rose.slug}

            secondaryAction={
            <ButtonGroup>
              <IconButton
                edge="end"
                aria-label="view"
                color="info"
                component={RouterLink}
                to={`${routes.RoseAdmin}/${rose.slug}`}
              >
                <Visibility />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="edit"
                color="primary"
                component={RouterLink}
                to={`/admin/roses/${rose.slug}/edit`}
              >
                <Edit />
              </IconButton>
              <IconButton
                color="error"
                edge="end"
                aria-label="download"
                component={RouterLink}
                to={`/admin/roses/${rose.slug}/delete`}
              >
                <Delete />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="download"
                color="secondary"
                disabled={!rose.qrCodeUrl}
                component="a"
                href={rose.qrCodeUrl}
                download
              >
                <Download />
              </IconButton>
            </ButtonGroup>
            }
          >
            <ListItemButton
              disabled={!rose.qrCodeUrl}
              onClick={ () => { rose.qrCodeUrl && onButtonClick(rose.qrCodeUrl, rose.name ) }}>
              <ListItemAvatar>
                <Avatar src={rose.qrCodeUrl} />
              </ListItemAvatar>
              <ListItemText primary={rose.name} />
              <ListItemText primary={rose.slug} />
            </ListItemButton>
         </ListItem>
        ))
      }
    </List>
  )
}

export default RoseListQr;
