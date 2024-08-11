import {Link, useLoaderData} from "react-router-dom";
import {Box, Container, List, ListItem, ListItemButton, ListItemText, Paper, Typography} from "@mui/material";
import Backdrop from "../components/Backdrop.tsx";
import {backdropImage} from "../constants/backdropImage.ts";
import RoseBreadcrumbs from "../components/RoseBreadcrumbs.tsx";
import {RoseIndexItem} from "../interfaces/RoseIndexItem.ts";
import {routes} from "../constants/routes.ts";

function RoseIndex() {
  const roses = useLoaderData() as RoseIndexItem[]

  return (
    <Box
      sx={{
        position: 'relative',
        pb: 4,
        minHeight: '100vh',
      }}
    >
      <Backdrop imageUrl={backdropImage} />
      <Container
        sx={{
          pt: 1,
          pb: 1,
        }}
      >
        <RoseBreadcrumbs />
        <Typography variant="h1" color='#fff'>Rose Directory</Typography>
        <Paper>
          { roses &&
            <List>
              {
                roses.map((rose) => (
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={`${routes.RoseIndex}/${rose.slug}`}>
                      <ListItemText primary={rose.name}/>
                    </ListItemButton>
                  </ListItem>
                ))
              }
            </List>
          }
        </Paper>
      </Container>
    </Box>
  )
}

export default RoseIndex;
