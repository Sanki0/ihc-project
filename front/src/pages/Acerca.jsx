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
        <p className="Acerca-paragraph Acerca-paragraph-2">Creamos esta herramienta para facilitar que los niños sordos y sus padres aprendan el ABC de la lengua de señas peruana. Deletreo manual.</p>
        <p className="Acerca-paragraph Acerca-paragraph-3">Aprenda más sobre la <a href="https://repositorio.minedu.gob.pe/handle/20.500.12799/5545">lengua de señas</a> o has una <a href="https://www.ensenasperu.org/involucrate.php">donación</a></p>
        <p className="Acerca-paragraph Acerca-paragraph-4">Seguimiento de manos por <a href="https://www.w3schools.com">TensorFlow.js</a></p>
      </div>
    </div>
  );
}