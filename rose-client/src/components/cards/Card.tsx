import {Card as MUICard, CardContent, CardHeader} from "@mui/material";
import {ReactNode} from "react";

interface CardProps {
  title: string;
  children?: ReactNode;
}

function Card({title, children}: CardProps) {
  return (
    <MUICard
      elevation={3}
      sx={{
        p: 1,
      }}
    >
      <CardHeader title={title} />
      <CardContent>
        {children}
      </CardContent>
    </MUICard>
  )
}

export default Card;
