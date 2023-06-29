import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import TabModal, {loader as editLoader} from './components/editTab/TabModal.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/:id",
        element: <TabModal />,
        loader:editLoader,
      },
    ],
  },
  // {
  //   path:"/:id",
  //   element:<EditTab />,
  //   loader:editLoader,
  // },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
