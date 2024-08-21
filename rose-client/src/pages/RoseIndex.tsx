import {useLoaderData} from "react-router-dom";
import {Box, Container, Paper, Tab, Tabs, Typography} from "@mui/material";
import Backdrop from "../components/Backdrop.tsx";
import {backdropImage} from "../constants/backdropImage.ts";
import RoseBreadcrumbs from "../components/RoseBreadcrumbs.tsx";
import {RoseIndexItem} from "../interfaces/RoseIndexItem.ts";
import RoseList from "../components/RoseList.tsx";
import {SyntheticEvent} from "react";
import RoseGallery from "../components/RoseGallery.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {updateTabIndex} from "../store/pagesSlice.ts";

function RoseIndex() {
  const roseIndexTab = useSelector((state: RootState) => state.pages.roseIndexTab);
  const dispatch = useDispatch();
  const roses = useLoaderData() as RoseIndexItem[]


  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    dispatch(updateTabIndex(newValue))
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
            <Tabs value={roseIndexTab} onChange={handleTabChange}>
              <Tab label="Gallery" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
              <Tab label="List" id="simple-tab-2" aria-controls="simple-tabpanel-2" />
            </Tabs>
          </Box>
          <Box position='relative'>
            <RoseGallery value={roseIndexTab} roses={roses}/>
            <RoseList roses={roses} value={roseIndexTab} />
          </Box>
        </Paper>
      </Container>
    </>
  )
}

export default RoseIndex;
