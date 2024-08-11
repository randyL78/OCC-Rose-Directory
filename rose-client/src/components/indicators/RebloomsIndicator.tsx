import {CardHeader} from "@mui/material";

interface Props {
  reblooms: string
}

function RebloomsIndicator({reblooms}: Props) {
  return (
    <CardHeader title={reblooms} align="center" />
  )
}

export default RebloomsIndicator;
