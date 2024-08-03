import {ReactNode} from "react";

import Card from './Card';


interface HistoryCardProps {
  children?: ReactNode;
}

function HistoryCard({children}: HistoryCardProps) {

  return (
    <Card title="History">
      {children}
    </Card>
  )
}

export default HistoryCard
