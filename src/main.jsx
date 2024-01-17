import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/about.jsx'
import Error from './components/error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    exact: true,
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '*',
    element: <Error />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
