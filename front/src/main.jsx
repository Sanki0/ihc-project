import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Formulario from './pages/Formulario.jsx'
import Conocenos from './pages/Conocenos.jsx'
import Miembro1 from './pages/Miembro1.jsx'
import Miembro2 from './pages/Miembro2.jsx'
import Miembro3 from './pages/Miembro3.jsx'

import { 
  createBrowserRouter,
  RouterProvider 
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1>No existe esa ventana</h1>,
  },
  {
    path: '/conocenos',
    element: <Conocenos />,
    children: [
      {
        path: 'miembro1',
        element: <Miembro1 />,
      },
      {
        path: 'miembro2',
        element: <Miembro2 />,
      },
      {
        path: 'miembro3',
        element: <Miembro3 />,
      },
    ]
  },
  {
    path: '/formulario',
    element: <Formulario />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='todo'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
