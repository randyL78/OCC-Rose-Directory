import {useLoaderData} from "react-router-dom";
import {Box, Container, Paper, Tab, Tabs, Typography} from "@mui/material";
import Backdrop from "../components/Backdrop.tsx";
import {backdropImage} from "../constants/backdropImage.ts";
import RoseBreadcrumbs from "../components/RoseBreadcrumbs.tsx";
import {RoseIndexItem} from "../interfaces/RoseIndexItem.ts";
import RoseList from "../components/RoseList.tsx";
import {SyntheticEvent, useState} from "react";
import RoseGallery from "../components/RoseGallery.tsx";

function RoseIndex() {
  const roses = useLoaderData() as RoseIndexItem[]
  const [value, setValue] = useState<number>(0);

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }

  return (
    <>
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
          <Box>
            <Tabs value={value} onChange={handleTabChange}>
              <Tab label="Gallery" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
              <Tab label="List" id="simple-tab-2" aria-controls="simple-tabpanel-2" />
            </Tabs>
          </Box>
          { roses &&
            <Box>
              <RoseGallery value={value}/>
              <RoseList roses={roses} value={value} />
            </Box>
          }
        </Paper>
      </Container>
    </>
  )
}

export default RoseIndex;
