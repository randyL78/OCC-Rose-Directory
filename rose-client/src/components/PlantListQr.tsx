import {
  Avatar,
  Button,
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText
} from "@mui/material";
import {AdminIndexItem} from "../interfaces/AdminIndexItem.ts";
import {Create, Delete, Download, Edit, QrCode, Visibility} from "@mui/icons-material";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {routes} from "../constants/routes.ts";
import {PlantTypes} from "../interfaces/PlantTypes.ts";

interface Props {
  plants: AdminIndexItem[];
  onButtonClick: (qrCodeUrl: string, name: string) => void;
  plantType: PlantTypes
}

function PlantListQr({ plants, onButtonClick, plantType }: Props) {
  const navigate = useNavigate()

  const baseRoute = plantType===PlantTypes.ROSE ? routes.RoseAdmin : routes.CompanionAdmin
  const path = plantType===PlantTypes.ROSE ? 'roses' : 'companions'

  const handleCreate = () => {
    navigate( `/admin/${path}/create`)
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
        plants.map((plant) => (
          <ListItem
            key={plant.slug}

            secondaryAction={
            <ButtonGroup>
              <IconButton
                edge="end"
                aria-label="view"
                color="info"
                component={RouterLink}
                to={`${baseRoute}/${plant.slug}`}
              >
                <Visibility />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="edit"
                color="primary"
                component={RouterLink}
                to={`${baseRoute}/${plant.slug}/edit`}
              >
                <Edit />
              </IconButton>
              <IconButton
                color="error"
                edge="end"
                aria-label="download"
                component={RouterLink}
                to={`${baseRoute}/${plant.slug}/delete`}
              >
                <Delete />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="download"
                color="secondary"
                disabled={!plant.qrCodeUrl}
                component="a"
                href={plant.qrCodeUrl}
                download
              >
                <Download />
              </IconButton>
            </ButtonGroup>
            }
          >
            <ListItemButton
              disabled={!plant.qrCodeUrl}
              onClick={ () => { plant.qrCodeUrl && onButtonClick(plant.qrCodeUrl, plant.name ) }}>
              <ListItemAvatar>
                <Avatar src={plant.qrCodeUrl} />
              </ListItemAvatar>
              <ListItemText primary={plant.name} />
              <ListItemText primary={plant.slug} />
            </ListItemButton>
         </ListItem>
        ))
      }
    </List>
  )
}

export default PlantListQr;
