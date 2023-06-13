import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Formulario from './pages/Formulario.jsx'
import Conocenos from './pages/Conocenos.jsx'
import Nombre from './pages/Nombre.jsx'
import ElegirNivel from './pages/ElegirNivel.jsx'
import ComenzarNivel from './pages/ComenzarNivel.jsx'
import Juego from './pages/Juego.jsx'

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
  },
  {
    path: '/nombre',
    element: <Nombre />,
  },
  {
    path: '/formulario',
    element: <Formulario />,
  },
  {
    path: '/elegir-nivel',
    element: <ElegirNivel />,
  },
  {
    path: '/comenzar-nivel',
    element: <ComenzarNivel />,
  },
  {
    path: '/juego',
    element: <Juego />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='todo'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
