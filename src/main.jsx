import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import About from './components/about.jsx'
import Error from './components/error.jsx'
import Skills from './components/skills.jsx'
import Home from './components/home.jsx'
import Contact from './components/contact.jsx'

const hashRouter = createHashRouter([
  {
    path: '/',
    exact: true,
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/skills',
    element: <Skills />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <Error />,
  }
])

const router = createBrowserRouter([
  {
    path: '/',
    exact: true,
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/skills',
    element: <Skills />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '*',
    element: <Error />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={hashRouter} />
  </React.StrictMode>,
)
