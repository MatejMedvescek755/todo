import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import SinglePageView from "./components/SinglePageView/SinglePageView.tsx"
import NavBar from './components/NavBar/NavBar.tsx';
import UsersView from './components/UsersView/UsersView.tsx';
import UserTodosView from './components/UserTodosView/UserTodosView.tsx';
import DashboardView from './components/DashboardView/DashboardView.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div><NavBar page={""} /><Outlet /></div>,
    children: [
      {
        path: "/",
        element: <DashboardView />,
      },
      {
        path: "/todos",
        element: <App />,
        errorElement: <ErrorPage />
      },
      {
        path: "/todos/:id",
        element: <SinglePageView />
      },
      {
        path: "/users",
        element: <UsersView />
      },
      {
        path: "/users/:userId",
        element: <UserTodosView />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
