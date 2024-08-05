import './App.css'

import RoseDetails, { loader as roseLoader} from "./pages/RoseDetails.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./constants/routes.ts";

const router = createBrowserRouter([
  {
    path: routes.Home,
    element: <h1>Home</h1>,
  },
  {
    path: routes.RoseIndex,
    element: <h1>Roses</h1>
  },
  {
    path: routes.RoseDetails,
    element: <RoseDetails />,
    //@ts-expect-error We know the data type being returned is rose data
    loader: roseLoader,
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
