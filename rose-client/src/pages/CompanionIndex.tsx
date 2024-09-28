import Backdrop from "../components/Backdrop.tsx";
import {backdropImage} from "../constants/backdropImage.ts";
import {Box, Container, Paper, Typography} from "@mui/material";
import CompanionBreadcrumbs from "../components/breadcrumbs/CompanionBreadcrumbs.tsx";
import Gallery from "../components/Gallery.tsx";
import {routes} from "../constants/routes.ts";
import {useLoaderData} from "react-router-dom";
import {PlantIndexItem} from "../interfaces/PlantIndexItem.ts";

export function CompanionIndex() {
  const plants = useLoaderData() as PlantIndexItem[]

  return (
    <>
      <Backdrop imageUrl={backdropImage} />
      <Container
        sx={{
          pt: 1,
          pb: 1,
        }}
      >
        <CompanionBreadcrumbs />
        <Typography variant="h1" color='#fff'>Companion Plant Directory</Typography>
        <Paper>
          <Box position='relative'>
            <Gallery plants={plants} value={0} baseUrl={routes.CompanionIndex} />
          </Box>
        </Paper>
      </Container>
    </>
  )
}
