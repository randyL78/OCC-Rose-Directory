import './App.css'

import RoseDetails from "./pages/RoseDetails.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./constants/routes.ts";
import {roseDetailLoader} from "./loaders/RoseDetailLoader.ts";
import {Link} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: routes.Home,
    element: <div>
      <h1>Home</h1>
      <Link to={routes.RoseIndex} >Roses</Link>
    </div>,
  },
  {
    path: routes.RoseIndex,
    element: <div>
      <h1>Roses</h1>
      <Link to={`${routes.RoseIndex}/cromoisi-superieur`} >Cromoisi Superieur</Link>
    </div>,
  },
  {
    path: routes.RoseDetails,
    element: <RoseDetails />,
    //@ts-expect-error We know the data type being returned is rose data
    loader: roseDetailLoader,
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
