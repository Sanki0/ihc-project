import { Link, Outlet } from "react-router-dom"
import Menu from '../components/Menu'
import '../styles/Acerca.css'

export default function Home() {
  return (
    <div className="All-Acerca-jsx">
      <div className="Acerca-Menu">
        <Menu />
      </div>
      <div className="Acerca">
        <h1 className="Acerca-h1 Acerca-h1-1">Acerca de</h1>
        <p className="Acerca-paragraph Acerca-paragraph-1">Hecho con amor por alumnos de la Universidad Nacional de Ingeniería</p>
        <p className="Acerca-paragraph Acerca-paragraph-2">Creamos esta herramienta para facilitar que los niños sordos y sus padres aprendan el ABC en el lenguaje de señas estadounidense. Deletreo manual.</p>
        <p className="Acerca-paragraph Acerca-paragraph-3">Aprenda más sobre el <a href="https://www.w3schools.com">lenguaje de señas</a> o has una <a href="https://www.w3schools.com">donación</a></p>
        <p className="Acerca-paragraph Acerca-paragraph-4">Seguimiento de manos por <a href="https://www.w3schools.com"> </a></p>
      </div>
    </div>
  );
}