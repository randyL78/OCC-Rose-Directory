import {RoseIndexItem} from "../interfaces/RoseIndexItem.ts";
import {Box, ImageList, ImageListItem, ImageListItemBar, useMediaQuery} from "@mui/material";
import theme from "../styles/theme.ts";
import {useNavigate} from "react-router-dom";
import {routes} from "../constants/routes.ts";

interface RoseGalleryProps {
  roses: RoseIndexItem[];
  value: number;
}

const imageSizeByIndex = [
  {col: 2, row: 2},
  {col: 1, row: 1},
  {col: 1, row: 1},
  {col: 1, row: 1},
  {col: 1, row: 1},
  {col: 1, row: 1},
  {col: 1, row: 1},
  {col: 1, row: 2},
  {col: 1, row: 2},
  {col: 2, row: 2},
]

function RoseListItem({rose, index}: {rose: RoseIndexItem, index: number}) {
  const navigate = useNavigate();
  const sizeIndex = index % imageSizeByIndex.length
  const imgRow = imageSizeByIndex[sizeIndex].row
  const imgCol = imageSizeByIndex[sizeIndex].col

  const imageClickHandler = () => {
    navigate(`${routes.RoseIndex}/${rose.slug}`)
  }

  return (
    <ImageListItem cols={imgCol} rows={imgRow} key={rose.id} onClick={imageClickHandler} sx={{ cursor: "pointer" }}>
        <img
          {...srcset(rose.imageUrl, 121, imgRow, imgCol)}
          alt={rose.name}
          loading="lazy"
        />
        <ImageListItemBar title={rose.name} />
    </ImageListItem>
  )
}

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function RoseGallery({value, roses}: RoseGalleryProps) {
  const medium = useMediaQuery(theme.breakpoints.down("sm"));
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
