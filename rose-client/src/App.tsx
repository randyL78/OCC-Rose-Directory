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
import ErrorBoundary from "./pages/ErrorBoundary.tsx";
import RoseCreate from "./components/RoseCreate.tsx";
import {createRoseAction} from "./actions/CreateRoseAction.ts";

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
            children: [
              {
                path: 'create',
                action: createRoseAction,
                element: <RoseCreate />
              }
            ]
          },
        ]
      }
    ],
    errorElement: <ErrorBoundary />,
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
