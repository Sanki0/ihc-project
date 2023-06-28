import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Formulario from './pages/Formulario.jsx'
import Conocenos from './pages/Conocenos.jsx'
import Nombre from './pages/Nombre.jsx'
import ElegirNivel from './pages/ElegirNivel.jsx'
import ComenzarNivel1 from './pages/ComenzarNivel1.jsx'
import ComenzarNivel2 from './pages/ComenzarNivel2.jsx'
import ComenzarNivel3 from './pages/ComenzarNivel3.jsx'
import Resultado from './pages/Resultado.jsx'
import Juego from './pages/Juego.jsx'
import Acerca from './pages/Acerca.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import RegisterName from './pages/RegisterName.jsx'

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
    path: '/comenzar-nivel1',
    element: <ComenzarNivel1 />,
  },
  {
    path: '/comenzar-nivel2',
    element: <ComenzarNivel2 />,
  },
  {
    path: '/comenzar-nivel3',
    element: <ComenzarNivel3 />,
  },
  {
    path: '/resultado',
    element: <Resultado />,
  },
  {
    path: '/juego',
    element: <Juego />,
  },
  {
    path: '/registro',
    element: <RegisterName />,
  },
  {
    path: '/acerca',
    element: <Acerca />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='todo'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
