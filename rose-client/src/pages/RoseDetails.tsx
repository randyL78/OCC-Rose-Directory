import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Link,
  Paper,
  Stack,
  Typography
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PillIndicator from "../components/indicators/PillIndicator.tsx";
import DescriptionCard from "../components/cards/DescriptionCard.tsx";
import CareCard from "../components/cards/CareCard.tsx";
import HistoryCard from "../components/cards/HistoryCard.tsx";
import {useLoaderData} from "react-router-dom";
import {roseLoaderData} from "../loaders/RoseDetailLoader.ts";


function RoseDetails() {
  const { rose } = useLoaderData() as roseLoaderData
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Box
        sx={{
          zIndex: -1,
          opacity: .3,
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundAttachment: 'fixed',
          backgroundColor: '#bcbcbc',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${rose.imageUrl})`,
        }}
      />
      <Container
        sx={{
          pt: 1,
          pb: 1,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            position: 'relative',
            minHeight: '33vh',
            backgroundColor: 'grey.800',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${rose.imageUrl})`,
          }}
        >
          <Box
            sx={{
              color: '#fff',
              p: 1,
            }}
          >
            <Breadcrumbs
              color="#fff"
              aria-label="breadcrumb"
              separator={<NavigateNextIcon fontSize="small" />}
            >
              <Link underline="hover" color="inherit" href="/">Home</Link>
              <Link underline="hover" color="inherit" href="/roses">Roses</Link>
              <Link underline="hover" color="inherit" href={`/roses/${rose.slug}`}>{rose.name}</Link>
            </Breadcrumbs>
          </Box>
        </Paper>
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
                <CardHeader title="Reblooms" align="center" />
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
                  <Paper elevation={6} sx={{width: '200px', margin: 'auto'}}>
                    <Box sx={{
                      backgroundColor: rose.colorPrimary,
                      height: '75px',
                      margin: 'auto',
                      width: '200px',
                    }} >{
                      rose.colorSecondary && (
                        <Box sx={{
                          borderStyle: 'solid',
                          borderColor: `transparent transparent ${rose.colorSecondary} transparent`,
                          borderWidth: '0 0 75px 200px',
                          height: '0',
                          margin: 'auto',
                          width: '0',
                        }} />
                      )
                    }
                    </Box>
                  </Paper>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3} md={1} sx={{pl: 2, pr: 2}}>
              <Card sx={{backgroundColor: '#9ca'}}>
                <CardHeader title="Fragrance" sx={{textAlign: 'center', pb: 0}} />
                <CardContent>
                  <Box sx={{
                    display: 'flex',
                    margin: 'auto',
                    mb: 2,
                    width: '200px',
                  }}>
                    <PillIndicator totalBoxes={7} filledBoxes={rose.fragranceIntensity} filledColor='#95a' />
                  </Box>
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
