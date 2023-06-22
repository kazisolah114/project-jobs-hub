import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import Statics from './components/Statics/Statics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import Error from './components/Error/Error';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'jobdetails/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/featuredjobs.json')
      },
      {
        path: 'statistics',
        element: <Statics></Statics>
      },
      {
        path: 'apjobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/featuredjobs.json')
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '',
        element: <div>404</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
