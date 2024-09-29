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
import GlobalErrorBoundary from "./pages/GlobalErrorBoundary.tsx";
import RoseCreate from "./components/RoseCreate.tsx";
import {createOrUpdateRoseAction} from "./actions/CreateOrUpdateRoseAction.ts";
import AdminErrorBoundary from "./pages/AdminErrorBoundary.tsx";
import DeleteRose from "./pages/DeleteRose.tsx";
import {deleteRoseAction} from "./actions/DeleteRoseAction.ts";
import {createRoseLoader} from "./loaders/CreateRoseLoader.ts";
import {roseAdminDetailLoader} from "./loaders/RoseAdminDetailLoader.ts";
import {Admin} from "./pages/Admin.tsx";
import {CompanionIndex} from "./pages/CompanionIndex.tsx";
import {companionIndexLoader} from "./loaders/CompanionIndexLoader.ts";
import {companionDetailLoader} from "./loaders/CompanionDetailLoader.ts";
import {CompanionDetails} from "./pages/CompanionDetails.tsx";
import {CompanionDetailItem} from "./interfaces/CompanionDetailItem.ts";
import {adminLoader} from "./loaders/AdminLoader.ts";
import CompanionAdminIndex from "./pages/CompanionAdminIndex.tsx";
import {companionAdminIndexLoader} from "./loaders/CompanionAdminIndexLoader.ts";
import {CompanionCreate} from "./components/CompanionCreate.tsx";
import {createCompanionLoader} from "./loaders/CreateCompanionLoader.ts";
import {createOrUpdateCompanionAction} from "./actions/CreateOrUpdateCompanionAction.ts";
import {companionAdminDetailLoader} from "./loaders/CompanionAdminDetailLoader.ts";
import {deleteCompanionAction} from "./actions/DeleteCompanionAction.ts";
import {DeleteCompanion} from "./pages/DeleteCompanion.tsx";
import {AdminRoseDetails} from "./pages/AdminRoseDetails.tsx";
import {AdminCompanionDetails} from "./pages/AdminCompanionDetails.tsx";

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
        path: routes.CompanionIndex,
        Component: CompanionIndex,
        loader: companionIndexLoader,
      },
      {
        path: routes.AdminCompanionDetails,
        Component: AdminCompanionDetails,
        loader: companionDetailLoader as unknown as LoaderFunction<CompanionDetailItem>,
      },
      {
        path: routes.CompanionDetails,
        Component: CompanionDetails,
        loader: companionDetailLoader as unknown as LoaderFunction<CompanionDetailItem>,
      },
      {
        path: routes.RoseIndex,
        Component: RoseIndex,
        loader: roseIndexLoader,
      },
      {
        path: routes.AdminRoseDetails,
        Component: AdminRoseDetails,
        loader: roseDetailLoader as unknown as LoaderFunction<RoseDetailItem>,
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
            path: '',
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: routes.CompanionAdmin,
            id: routes.CompanionAdmin,
            Component: CompanionAdminIndex,
            loader: companionAdminIndexLoader,
            errorElement: <AdminErrorBoundary />,
            children: [
              {
                path: 'create',
                action: createOrUpdateCompanionAction,
                loader: createCompanionLoader,
                Component: CompanionCreate,
              },
              {
                path: ':slug/edit',
                action: createOrUpdateCompanionAction,
                loader: companionAdminDetailLoader,
                Component: CompanionCreate,
              },
              {
                path: ':slug/delete',
                action: deleteCompanionAction,
                Component: DeleteCompanion
              }
            ],
          },
          {
            path: routes.RoseAdmin,
            id: routes.RoseAdmin,
            Component: RoseAdminIndex,
            loader: roseAdminIndexLoader,
            errorElement: <AdminErrorBoundary />,
            children: [
              {
                path: 'create',
                action: createOrUpdateRoseAction,
                loader: createRoseLoader,
                Component: RoseCreate
              },
              {
                path: ':roseSlug/delete',
                Component: DeleteRose,
                action: deleteRoseAction
              },
              {
                path: ':roseSlug/edit',
                action: createOrUpdateRoseAction,
                Component: RoseCreate,
                loader: roseAdminDetailLoader,
              }
            ]
          },
        ]
      }
    ],
    errorElement: <GlobalErrorBoundary />,
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
