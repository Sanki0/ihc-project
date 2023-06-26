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
        <div className="home-slide-down home-delay-2">
          <h3>Aprende el ABC en lengua de señas</h3> {/* 39% */}
          <img src={"src/assets/home.jpg"} alt="Logo" className="home-img" />
          <h3 className="frase">¿Estas preparado para el reto?</h3> {/* 39% */}
        </div>
        <div className="boton">
          <div className="home-boton ">
            <button className="button-home home-slide-down home-delay-1" role="button">   {/* 49% */}
              <Link className="home-link" to="elegir-nivel">Comenzar</Link>
              <Outlet />
            </button>
          </div>
        </div>
        
        <div className="home-cont-2-nivel"></div> {/* 65% */}
        <p className="home-slide-down home-delay-1">Este juego usará tu cámara web para analizar
          las formas de tus dedos. Todo se procesa localmente y no se enviarán ni
          almacenarán datos de la cámara web en ninguna parte</p> {/* 100% */}
      </div>
      {
       /* 
        Pagina de registar nombre
       <RegisterName />
       */
      }
    
    </div>
  );
}