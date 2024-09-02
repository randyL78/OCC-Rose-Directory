import './App.css'

import RoseDetails from "./pages/RoseDetails.tsx";
import {createBrowserRouter, LoaderFunction, RouterProvider} from "react-router-dom";
import {routes} from "./constants/routes.ts";
import {roseDetailLoader} from "./loaders/RoseDetailLoader.ts";
import Home from "./pages/Home.tsx";
import RoseIndex from "./pages/RoseIndex.tsx";
import {roseIndexLoader} from "./loaders/RoseIndexLoader.ts";
import Layout from "./components/Layout.tsx";
import {RoseDetailItem} from "./interfaces/RoseDetailItem.ts";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
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
        loader: roseDetailLoader as unknown as LoaderFunction<RoseDetailItem>,
      },
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
