import React from 'react'
import ReactDOM from 'react-dom/client'
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Jobdetails from './components/Jobdetails/Jobdetails';
import Error from './components/Error/Error';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    
  
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json')//only load the data you need do not load allthe data
      },
      {
        path: '/job/:id',
        element:<Jobdetails></Jobdetails>, 
        loader: ()=> fetch('../jobs.json')
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    
  </React.StrictMode>,
)
