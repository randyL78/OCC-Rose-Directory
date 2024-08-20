import {Typography} from "@mui/material";

function RoseGallery({value}: {value: number}) {
  return (
    <Typography id="simple-tab-panel-1" hidden={value !== 0}>Gallery View</Typography>
  )
}

export default RoseGallery;
