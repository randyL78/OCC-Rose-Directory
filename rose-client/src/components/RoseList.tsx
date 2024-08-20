import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {Link} from "react-router-dom";
import {routes} from "../constants/routes.ts";
import {RoseIndexItem} from "../interfaces/RoseIndexItem.ts";

interface RoseListProps {
  roses: RoseIndexItem[];
}

function RoseList({roses}: RoseListProps) {
  return (
    <List>
      {
        roses.map((rose) => (
          <ListItem key={rose.id} disablePadding>
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
