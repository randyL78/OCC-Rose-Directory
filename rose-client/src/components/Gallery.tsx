import {PlantIndexItem} from "../interfaces/PlantIndexItem.ts";
import {Box, ImageList, useMediaQuery} from "@mui/material";
import theme from "../styles/theme.ts";
import PlantListItem from "./PlantListItem.tsx";
import {routes} from "../constants/routes.ts";

interface RoseGalleryProps {
  plants: PlantIndexItem[];
  value: number;
  baseUrl: routes
}

function Gallery({value, plants, baseUrl}: RoseGalleryProps) {
  const medium = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Box hidden={value !== 0} p={1}>
      <ImageList variant="quilted" cols={medium ? 2 : 4} rowHeight={200}>
        {plants && plants.map((plant, index) => (
          <PlantListItem baseUrl={baseUrl} key={plant.slug} plant={plant} index={index}/>
        ))}
      </ImageList>
    </Box>
  )
}

export default Gallery;
