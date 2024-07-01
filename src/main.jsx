import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StorePage from '../pages/StorePage.jsx'
import IpadPage from '../pages/IpadPage.jsx'
import IphonePage from '../pages/IphonePage.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "StorePage",
    element: <StorePage />,
  },
  {
    path: "IpadPage",
    element: <IpadPage />,
  },
  {
    path: "IphonePage",
    element: <IphonePage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
)
