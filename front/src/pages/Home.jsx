import { Link, Outlet } from "react-router-dom"
import Menu from '../components/Menu'
import '../styles/Home.css'

export default function Home() {
    return (
        <div>
            <div className="Menu">
                <Menu />
            </div>
            <div className="Home">
                <div className="cont-1"></div>
                <h1 className="slide-down delay-2">Señas ABC</h1>
                <h3 className="slide-down delay-2">Aprende el ABC de lenguaje de señas con machine learning</h3>
                <button className="button-home slide-down delay-1" role="button">
                    <Link className="link" to="elegir-nivel">Comenzar</Link>
                <Outlet />
                </button>
                <div className="cont-2"></div>
                <p className="slide-up delay-1">Este juego usará tu cámara web y el aprendizaje automático para analizar 
                    las formas de tus manos. Todo se procesa localmente y no se enviarán ni 
                    almacenarán datos de la cámara web en ninguna parte</p>
            </div>
            
        </div>
    );
}