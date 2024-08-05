import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  Typography
} from "@mui/material";

import PillIndicator from "../components/indicators/PillIndicator.tsx";
import DescriptionCard from "../components/cards/DescriptionCard.tsx";
import CareCard from "../components/cards/CareCard.tsx";
import HistoryCard from "../components/cards/HistoryCard.tsx";
import {useLoaderData} from "react-router-dom";
import {roseLoaderData} from "../loaders/RoseDetailLoader.ts";
import HeroImage from "../components/HeroImage.tsx";
import RoseBreadcrumbs from "../components/RoseBreadcrumbs.tsx";
import ColorIndicator from "../components/indicators/ColorIndicator.tsx";
import RebloomsIndicator from "../components/indicators/RebloomsIndicator.tsx";
import Backdrop from "../components/Backdrop.tsx";

function RoseDetails() {
  const { rose } = useLoaderData() as roseLoaderData
  const roseBreadcrumb = <RoseBreadcrumbs slug={rose.slug} name={rose.name} />

  return (
    <Box
      sx={{
        position: 'relative',
        pb: 4,
      }}
    >
      <Backdrop imageUrl={rose.imageUrl} />
      <Container
        sx={{
          pt: 1,
          pb: 1,
        }}
      >
        <HeroImage imageUrl={rose.imageUrl} breadcrumb={roseBreadcrumb}/>

        <Stack spacing={4}>
          <Typography align="center" variant="h1">{rose.name}</Typography>
          <Grid
            container
            columns={3}
          >
            <Grid
              item
              xs={3}
              md={1}
              sx={{pl: 2, pr: 2, pb: 2}}
            >
              <Card
                sx={{
                  backgroundColor: '#9ca',
                }}
              >
                <RebloomsIndicator reblooms={rose.reblooms} />
              </Card>
            </Grid>
            <Grid
              item
              xs={3}
              md={1}
              sx={{pl: 2, pr: 2, pb: 2}}
            >
              <Card
                sx={{
                  backgroundColor: '#9ca',
                }}
              >
                <CardHeader title="Color" sx={{textAlign: 'center', pb: 0}} />
                <CardContent>
                  <ColorIndicator colorPrimary={rose.colorPrimary} colorSecondary={rose.colorSecondary} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} md={1} sx={{pl: 2, pr: 2}}>
              <Card sx={{backgroundColor: '#9ca'}}>
                <CardHeader title="Fragrance" sx={{textAlign: 'center', pb: 0}} />
                <CardContent>
                  <PillIndicator totalBoxes={7} filledBoxes={rose.fragranceIntensity} filledColor='#95a' />
                  <Typography fontWeight='bold' align='center'>
                    {rose.fragranceDescription}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <DescriptionCard>{rose.description}</DescriptionCard>
          <CareCard>{rose.careInstructions}</CareCard>
          <HistoryCard>{rose.history}</HistoryCard>
        </Stack>
      </Container>
    </Box>
  )
}

export default RoseDetails;
