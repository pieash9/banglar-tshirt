import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Main from './Components/Layout/Main';
import OrderReview from './Components/OrderReview';
import Grandpa from './Components/Grandpa';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:()=> fetch(`tshirts.json`)
      },
      {
        path:"review",
        element:<OrderReview/>
      },
      {
        path:"/grandpa",
        element:<Grandpa/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
