import {CardHeader} from "@mui/material";

interface Props {
  reblooms?: boolean
}

function RebloomsIndicator({reblooms = true}: Props) {
  const title = reblooms ? "Reblooms" : "Once Blooming";

  return (
    <CardHeader title={title} align="center" />
  )
}

export default RebloomsIndicator;
