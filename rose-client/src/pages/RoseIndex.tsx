import {useLoaderData} from "react-router-dom";
import {Box, Collapse, Container, Divider, Paper, Tab, Tabs, Typography} from "@mui/material";
import Backdrop from "../components/Backdrop.tsx";
import {backdropImage} from "../constants/backdropImage.ts";
import RoseBreadcrumbs from "../components/RoseBreadcrumbs.tsx";
import {RoseIndexItem} from "../interfaces/RoseIndexItem.ts";
import RoseList from "../components/RoseList.tsx";
import {SyntheticEvent, useEffect, useState} from "react";
import RoseGallery from "../components/RoseGallery.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {toggleSearchExpanded, updateSearchText, updateTabIndex} from "../store/roseIndexSlice.ts";
import ExpandSearchButton from "../components/ExpandSearchButton.tsx";
import SearchInput from "../components/SearchInput.tsx";

function RoseIndex() {
  const tabIndex = useSelector((state: RootState) => state.roseIndex.tabIndex)
  const searchExpanded = useSelector((state: RootState) => state.roseIndex.searchExpanded)
  const searchText = useSelector((state: RootState) => state.roseIndex.searchText)
  const dispatch = useDispatch();
  const roses = useLoaderData() as RoseIndexItem[]

  const [filteredRoses, setFilteredRoses] = useState<RoseIndexItem[]>(roses)

  useEffect(() => {
    const value = searchExpanded ? searchText : ''
    setFilteredRoses(    roses.filter((rose: RoseIndexItem) => rose.name.toLowerCase().includes(value.toLowerCase())))
  }, [searchExpanded, searchText, roses]);

  const handleUpdateSearchText = (value: string) => {
    dispatch(updateSearchText(value))
  }

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    dispatch(updateTabIndex(newValue))
  }

  const handleExpandSearch = () => {
    dispatch(toggleSearchExpanded())
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
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Tabs value={tabIndex} onChange={handleTabChange}>
              <Tab label="Gallery" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
              <Tab label="List" id="simple-tab-2" aria-controls="simple-tabpanel-2" />
            </Tabs>
            <ExpandSearchButton open={searchExpanded} clickHandler={handleExpandSearch}/>
          </Box>
          <Collapse in={searchExpanded}>
            <Divider />
            <Box pt={2} px={2} display="flex" justifyContent="end">
              <SearchInput value={searchText}  setValue={handleUpdateSearchText}/>
            </Box>
          </Collapse>
          <Box position='relative'>
            <RoseGallery value={tabIndex} roses={filteredRoses}/>
            <RoseList roses={filteredRoses} value={tabIndex} />
          </Box>
        </Paper>
      </Container>
    </>
  )
}

export default RoseIndex;
