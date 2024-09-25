import {useLoaderData} from "react-router-dom";
import {Box, Button, Collapse, Container, Divider, Pagination, Paper, Tab, Tabs, Typography} from "@mui/material";
import Backdrop from "../components/Backdrop.tsx";
import {backdropImage} from "../constants/backdropImage.ts";
import RoseBreadcrumbs from "../components/breadcrumbs/RoseBreadcrumbs.tsx";
import {RoseIndexItem} from "../interfaces/RoseIndexItem.ts";
import RoseList from "../components/RoseList.tsx";
import {ChangeEvent, SyntheticEvent, useEffect, useState} from "react";
import RoseGallery from "../components/RoseGallery.tsx";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {toggleSearchExpanded, updatePageIndex, updateSearchText, updateTabIndex} from "../store/roseIndexSlice.ts";
import ExpandSearchButton from "../components/ExpandSearchButton.tsx";
import SearchInput from "../components/SearchInput.tsx";

const PAGE_SIZE = 15;

function RoseIndex() {
  const tabIndex = useSelector((state: RootState) => state.roseIndex.tabIndex)
  const searchExpanded = useSelector((state: RootState) => state.roseIndex.searchExpanded)
  const searchText = useSelector((state: RootState) => state.roseIndex.searchText)
  const pageIndex = useSelector((state: RootState) => state.roseIndex.pageIndex)
  const dispatch = useDispatch();
  const roses = useLoaderData() as RoseIndexItem[]

  const [filteredRoses, setFilteredRoses] = useState<RoseIndexItem[]>(roses)
  const [numberOfPages, setNumberOfPages] = useState<number>(1)

  useEffect(() => {
    const value = searchExpanded ? searchText : ''
    const filteredRoses = roses.filter((rose: RoseIndexItem) => rose.name.toLowerCase().includes(value.toLowerCase()))

    const pagesLength = Math.ceil(filteredRoses.length / PAGE_SIZE)

    setNumberOfPages(pagesLength)

    const index = (pageIndex > pagesLength || pageIndex === 0) ? pagesLength : pageIndex

    const start = (index - 1) * PAGE_SIZE
    const end = (index) * PAGE_SIZE

    const pagedRoses = filteredRoses.slice(start, end)

    setFilteredRoses(pagedRoses)

    if(index != pageIndex) {
      dispatch(updatePageIndex(index))
    }
  }, [searchExpanded, searchText, roses, pageIndex, dispatch]);

  const handleUpdateSearchText = (value: string) => {
    dispatch(updateSearchText(value))
  }

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    dispatch(updateTabIndex(newValue))
  }

  const handleExpandSearch = () => {
    dispatch(toggleSearchExpanded())
  }

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    dispatch(updatePageIndex(value))
  }

  const handleBackToTop = () => {
    window.scrollTo({top: 0, left: 0})
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
            <Box pb={2} px={2} display="flex" justifyContent="center">
              <Pagination
                page={pageIndex}
                onChange={handlePageChange}
                count={numberOfPages}
                showFirstButton
                showLastButton
                variant="outlined"
                color="primary" />
            </Box>
            <Box pb={2} px={2} display="flex" justifyContent="center">
              <Button onClick={handleBackToTop}>Back To Top</Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  )
}

export default RoseIndex;
