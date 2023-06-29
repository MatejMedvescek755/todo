import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import SinglePageView from "./components/SinglePageView/SinglePageView.tsx"


const router = createBrowserRouter([
  {
    path: "/todos",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/todos/:id",
    element: <SinglePageView></SinglePageView>
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
