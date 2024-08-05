import {routes} from "../constants/routes.ts";
import {Link} from "react-router-dom";

function Home() {
  return (
    <div data-testid="home">
      <h1>Home</h1>
      <Link to={routes.RoseIndex} >Roses</Link>
    </div>
  )
}

export default Home;
