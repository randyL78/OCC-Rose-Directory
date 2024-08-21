import {RoseIndexItem} from "../interfaces/RoseIndexItem.ts";
import {useNavigate} from "react-router-dom";
import {routes} from "../constants/routes.ts";
import {ImageListItem, ImageListItemBar} from "@mui/material";

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
  {col: 1, row: 1},
  {col: 1, row: 1},
  {col: 1, row: 1},
  {col: 1, row: 1},
  {col: 2, row: 1},
]

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

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

export default RoseListItem;
