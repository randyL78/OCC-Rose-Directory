import {Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText} from "@mui/material";
import {RoseQrItem} from "../interfaces/RoseQrItem.ts";
import {Download} from "@mui/icons-material";

interface Props {
  roses: RoseQrItem[];
  onButtonClick: (qrCodeUrl: string, name: string) => void;
}

function RoseListQr({ roses, onButtonClick }: Props) {
  return (
    <List>
      <ListItem key='header'>
        <ListItemText primary="QR Code/Id" />
        <ListItemText primary="Name" />
        <ListItemText primary="Slug" />
      </ListItem>
      {
        roses.map((rose) => (
          <ListItem
            key={rose.slug}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="download"
                disabled={!rose.qrCodeUrl}
                component="a"
                href={rose.qrCodeUrl}
                download
              >
                <Download />
              </IconButton>
            }
          >
            <ListItemButton disabled={!rose.qrCodeUrl} onClick={ () => { rose.qrCodeUrl && onButtonClick(rose.qrCodeUrl, rose.name ) }}>
              <ListItemAvatar>
                <Avatar src={rose.qrCodeUrl} />
              </ListItemAvatar>
              <ListItemText primary={rose.id} />
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
