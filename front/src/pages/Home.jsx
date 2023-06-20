import { Link, Outlet } from "react-router-dom"
import Menu from '../components/Menu'
import '../styles/Home.css'
import RegisterName from "./RegisterName";

export default function Home() {
  return (
    <div className="All-Home-jsx">
      <div className="Home-Menu">
        <Menu />
      </div>
      <div className="Home">
        <div className="home-cont-1-nivel"></div>   {/* 5% */}
        <h1 className="home-slide-down home-delay-2">Señas ABC</h1> {/* 15% */}
        <div className="home-cont-3-nivel"></div>   {/* 23% */}
        <h3 className="home-slide-down home-delay-2">Aprende el ABC de lenguaje de señas con machine learning</h3> {/* 39% */}
        <RegisterName />
        <div className="home-boton">
          <button className="button-home home-slide-down home-delay-1" role="button">   {/* 49% */}
            <Link className="home-link" to="elegir-nivel">Comenzar</Link>
            <Outlet />
          </button>
        </div>
        <div className="home-cont-2-nivel"></div> {/* 65% */}
        <p className="home-slide-down home-delay-1">Este juego usará tu cámara web y el aprendizaje automático para analizar
          las formas de tus manos. Todo se procesa localmente y no se enviarán ni
          almacenarán datos de la cámara web en ninguna parte</p> {/* 100% */}
      </div>
    </div>
  );
}