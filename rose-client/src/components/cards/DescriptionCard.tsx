import {Typography} from "@mui/material";
import Card from './Card';

interface DescriptionCardProps {
  children?: string;
}

function DescriptionCard({children}: DescriptionCardProps) {

  return (
    <Card title="Description">
      <Typography>
        {children}
      </Typography>
    </Card>
  )
}

export default DescriptionCard;
