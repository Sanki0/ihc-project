import { Link, Outlet } from "react-router-dom"
import Menu4 from '../components/Menu4'
import '../styles/Acerca.css'

export default function Home() {
  return (
    <div className="All-Acerca-jsx">
      <div className="Acerca-Menu">
        <Menu4 />
      </div>
      <div className="Acerca">
        <h1 className="Acerca-h1 Acerca-h1-1">Instrucciones</h1>
        <p className="Acerca-paragraph Acerca-paragraph-1">1. Das click al botón de "Comenzar"</p>
        <p className="Acerca-paragraph Acerca-paragraph-2">2. Ingresas tu nombre, puedes escribirlo o usar el micrófono, luego le das al botón de enviar.</p>
        <p className="Acerca-paragraph Acerca-paragraph-3">3. Escoges el nivel de tu preferencia, a mayor nivel mayor dificultad.</p>
        <p className="Acerca-paragraph Acerca-paragraph-4">4. Dar permisos para encender tu cámara y verás las distintas palabras que posee el nivel</p>
        <p className="Acerca-paragraph Acerca-paragraph-5">5. Formas las palabras que irán apareciendo con tu mano e irás acumulando una puntuación.</p>
      </div>
    </div>
  );
}