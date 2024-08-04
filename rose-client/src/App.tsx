import './App.css'
import {
  Box,
  Breadcrumbs, Card, CardContent, CardHeader,
  Container,
  createTheme, Grid,
  Link,
  Paper,
  Stack,
  ThemeProvider,
  Typography
} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import DescriptionCard from "./components/cards/DescriptionCard.tsx";
import CareCard from "./components/cards/CareCard.tsx";
import HistoryCard from "./components/cards/HistoryCard.tsx";

const theme = createTheme()

theme.typography.h1 = {
  [theme.breakpoints.up('md')]: {
    fontSize: '6rem',
    fontWeight: "100",
  },
}

function App() {

  return (
    <ThemeProvider theme={theme}>
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
            backgroundImage: `url(${'https://marvel-b1-cdn.bc0a.com/f00000000184330/monticelloshop.org/cdn/shop/products/cramoisi-sup-rieur-rose-rosa-chinensis-cv-214__35430.1528316200.1280.1280.jpg?v=1679984940&width=900'})`,
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
              backgroundImage: `url(${'https://marvel-b1-cdn.bc0a.com/f00000000184330/monticelloshop.org/cdn/shop/products/cramoisi-sup-rieur-rose-rosa-chinensis-cv-214__35430.1528316200.1280.1280.jpg?v=1679984940&width=900'})`,
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
                <Link underline="hover" color="inherit" href="/cramoisi-superieur">Cromoisi Superieur</Link>
              </Breadcrumbs>
            </Box>
          </Paper>
          <Stack spacing={4}>
            <Typography align="center" variant="h1">Cromoisi Superieur</Typography>
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
                        backgroundColor: '#C8223C',
                        height: '75px',
                        margin: 'auto',
                        width: '200px',
                      }} >
                        <Box sx={{
                          borderStyle: 'solid',
                          borderColor: 'transparent transparent #fc5C96 transparent',
                          borderWidth: '0 0 75px 200px',
                          height: '0',
                          margin: 'auto',
                          width: '0',
                        }} />
                      </Box>
                    </Paper>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                item
                xs={3}
                md={1}
                sx={{pl: 2, pr: 2}}
              >
                <Card
                  sx={{
                    backgroundColor: '#9ca',
                  }}
                >
                  <CardHeader title="Fragrance" sx={{textAlign: 'center', pb: 0}} />
                  <CardContent>
                    <Box sx={{
                      display: 'flex',
                      margin: 'auto',
                      mb: 2,
                      width: '200px',
                    }}>
                      <Box
                        sx={{
                          borderRadius: '12px 0 0 12px',
                          borderRight: '2px solid #9ca',
                          flex: 1,
                          backgroundColor: '#95a',
                          height: '20px'
                      }}
                      />
                      <Box
                        sx={{
                          borderRight: '2px solid #9ca',
                          flex: 1,
                          backgroundColor: '#95a',
                          height: '20px'
                        }}
                      />
                      <Box
                        sx={{
                          borderRight: '2px solid #9ca',
                          flex: 1,
                          backgroundColor: '#95a',
                          height: '20px'
                        }}
                      />
                      <Box
                        sx={{
                          borderRight: '2px solid #9ca',
                          flex: 1,
                          backgroundColor: 'white',
                          height: '20px'
                        }}
                      />
                      <Box
                        sx={{
                          borderRadius: '0 12px 12px 0',
                          flex: 1,
                          backgroundColor: 'white',
                          height: '20px'
                        }}
                      />
                    </Box>
                    <Typography fontWeight='bold' align='center'>
                      Sweet and fruity
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <DescriptionCard>
              Cherry-red to crimson flowers with occasional white streaks
              bloom in small clusters suffused with a raspberry fragrance. The
              very double blooms have an average diameter of 2.25” and are
              cupped-to-flat with a reflexed bloom form. Blooms in flushes
              throughout the season. Grows 30” to 6’ tall by 3-4’ wide.
              Cramoisi is vigorous, drought and heat tolerant, and is an
              excellent cut flower. Prefers full sun and loamy, well-draining
              soil. Found rose Bengal, China, before 1818. At Old City
              Cemetery it is in Section EE, the Confederate Section.
            </DescriptionCard>
            <CareCard>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus ante. Praesent a gravida elit, sed consequat ligula. Donec non mauris quis leo lacinia suscipit sit amet vel quam. Praesent neque nisi, pharetra id accumsan et, mollis et nibh. Donec erat turpis, posuere a volutpat eget, facilisis pellentesque elit. Praesent posuere dictum purus a congue. Suspendisse in libero sit amet dolor efficitur volutpat et eget nulla. In enim ipsum, blandit ultricies lacinia vel, vehicula a lorem. Aenean rhoncus urna ut faucibus bibendum.
              </Typography>
              <Typography>
                Quisque at diam eget leo varius lacinia convallis eu nibh. Quisque facilisis aliquam dictum. Ut tristique at diam eu ultricies. Phasellus placerat nisi commodo nunc mattis, at rutrum tellus accumsan. Vivamus euismod erat vitae lacinia vulputate. Vestibulum eleifend posuere ligula, quis egestas quam. Vivamus nec velit lectus.
              </Typography>
            </CareCard>
            <HistoryCard>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget risus ante. Praesent a gravida elit, sed consequat ligula. Donec non mauris quis leo lacinia suscipit sit amet vel quam. Praesent neque nisi, pharetra id accumsan et, mollis et nibh. Donec erat turpis, posuere a volutpat eget, facilisis pellentesque elit. Praesent posuere dictum purus a congue. Suspendisse in libero sit amet dolor efficitur volutpat et eget nulla. In enim ipsum, blandit ultricies lacinia vel, vehicula a lorem. Aenean rhoncus urna ut faucibus bibendum.
              </Typography>
              <Typography>
                Quisque at diam eget leo varius lacinia convallis eu nibh. Quisque facilisis aliquam dictum. Ut tristique at diam eu ultricies. Phasellus placerat nisi commodo nunc mattis, at rutrum tellus accumsan. Vivamus euismod erat vitae lacinia vulputate. Vestibulum eleifend posuere ligula, quis egestas quam. Vivamus nec velit lectus.
              </Typography>
            </HistoryCard>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
