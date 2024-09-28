import {PlantIndexItem} from "../interfaces/PlantIndexItem.ts";
import {useNavigate} from "react-router-dom";
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

interface Props {
  plant: PlantIndexItem
  index: number
  baseUrl: string
}

function PlantListItem({plant, index, baseUrl}: Props) {
  const navigate = useNavigate();
  const sizeIndex = index % imageSizeByIndex.length
  const imgRow = imageSizeByIndex[sizeIndex].row
  const imgCol = imageSizeByIndex[sizeIndex].col

  const imageClickHandler = () => {
    navigate(`${baseUrl}/${plant.slug}`)
  }

  return (
    <ImageListItem cols={imgCol} rows={imgRow} key={plant.slug} onClick={imageClickHandler} sx={{ cursor: "pointer" }}>
      <img
        {...srcset(plant.imageUrl, 121, imgRow, imgCol)}
        alt={plant.name}
        loading="lazy"
      />
      <ImageListItemBar title={plant.name} />
    </ImageListItem>
  )
}

export default PlantListItem;
