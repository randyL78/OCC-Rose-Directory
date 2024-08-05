import './App.css'

import RoseDetails from "./pages/RoseDetails.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./constants/routes.ts";
import {roseDetailLoader} from "./loaders/RoseDetailLoader.ts";
import Home from "./pages/Home.tsx";
import RoseIndex from "./pages/RoseIndex.tsx";
import {roseIndexLoader} from "./loaders/RoseIndexLoader.ts";

const router = createBrowserRouter([
  {
    path: routes.Home,
    element: <Home />,
  },
  {
    path: routes.RoseIndex,
    element: <RoseIndex />,
    loader: roseIndexLoader,
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
