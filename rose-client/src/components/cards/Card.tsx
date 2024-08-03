import {Card as MUICard, CardHeader} from "@mui/material";
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
        backgroundColor: '#fff',
        p: 1,
      }}
    >
      <CardHeader title={title} />
      {children}
    </MUICard>
  )
}

export default Card;
