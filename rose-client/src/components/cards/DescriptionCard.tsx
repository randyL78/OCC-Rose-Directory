import Card from './Card';

interface DescriptionCardProps {
  children?: string;
}

function DescriptionCard({children}: DescriptionCardProps) {

  return (
    <Card title="Description">
      {children}
    </Card>
  )
}

export default DescriptionCard;
