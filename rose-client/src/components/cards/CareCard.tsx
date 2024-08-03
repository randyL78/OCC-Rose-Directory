import {ReactNode} from "react";

import Card from './Card';


interface CareCardProps {
  children?: ReactNode;
}

function CareCard({children}: CareCardProps) {

  return (
    <Card title="Care Instructions">
      {children}
    </Card>
  )
}

export default CareCard;
