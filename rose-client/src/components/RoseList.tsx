import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";
import {routes} from "../constants/routes.ts";
import {PlantIndexItem} from "../interfaces/PlantIndexItem.ts";

interface RoseListProps {
  roses: PlantIndexItem[];
  value: number;
}

function RoseList({roses, value}: RoseListProps) {
  return (
    <List id="simple-tab-panel-2" hidden={value !== 1}>
      {
        roses.map((rose) => (
          <ListItem key={rose.slug} disablePadding>
            <ListItemButton component={Link} to={`${routes.RoseIndex}/${rose.slug}`}>
              <ListItemText primary={rose.name}/>
            </ListItemButton>
          </ListItem>
        ))
      }
    </List>
  )
}

export default RoseList;
