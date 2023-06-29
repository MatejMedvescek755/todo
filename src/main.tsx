import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Modal from './components/Modal/Modal.tsx';
import { getItem } from "./index.ts";
import { Todo } from "./index";
import TodoViewModal from "./components/TodoViewModal/TodoViewModal.tsx"


const router = createBrowserRouter([
  {
    path: "/todos",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/todos/:id",
        element: <Modal><TodoViewModal /></Modal>,
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
