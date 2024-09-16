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
import RoseAdminIndex from "./pages/RoseAdminIndex.tsx";
import {roseAdminIndexLoader} from "./loaders/RoseAdminIndexLoader.ts";
import {homeAction} from "./actions/HomeAction.ts";
import {logOut} from "./actions/LogoutAction.ts";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: routes.Home,
        Component: Home,
        action: homeAction,
      },
      {
        path: routes.RoseIndex,
        Component: RoseIndex,
        loader: roseIndexLoader,
      },
      {
        path: routes.RoseDetails,
        Component: RoseDetails,
        loader: roseDetailLoader as unknown as LoaderFunction<RoseDetailItem>,
      },
      {
        path: "admin",
        element: <Layout />,
        children: [
          {
            path: routes.RoseAdmin,
            element: <RoseAdminIndex />,
            loader: roseAdminIndexLoader,
          },
        ]
      }
    ]
  },
  {
    path: "/logout",
    action: logOut,
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
