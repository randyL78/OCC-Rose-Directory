import {Link} from "react-router-dom";
import {routes} from "../constants/routes.ts";

function RoseIndex() {
  return (
    <div>
      <h1>Roses</h1>
      <Link to={`${routes.RoseIndex}/cromoisi-superieur`}>Cromoisi Superieur</Link>
    </div>
  )
}

export default RoseIndex;
