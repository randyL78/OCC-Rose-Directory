import {RoseIndexItem} from "../interfaces/RoseIndexItem.ts";
import {Box, ImageList, useMediaQuery} from "@mui/material";
import theme from "../styles/theme.ts";
import RoseListItem from "./RoseListItem.tsx";

interface RoseGalleryProps {
  roses: RoseIndexItem[];
  value: number;
}

function RoseGallery({value, roses}: RoseGalleryProps) {
  const medium = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <Box hidden={value !== 0} p={1}>
      <ImageList variant="quilted" cols={medium ? 2 : 4} rowHeight={200}>
        {roses && roses.map((rose, index) => (
          <RoseListItem key={rose.id} rose={rose} index={index}/>
        ))}
      </ImageList>
    </Box>
  )
}

export default RoseGallery;
