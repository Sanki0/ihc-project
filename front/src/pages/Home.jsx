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
                <h1>Señas ABC</h1>
                <h3>Aprende el ABC de lenguaje de señas con machine learning</h3>
                <button class="button-62" role="button">
                    <Link className="link" to="elegir-nivel">Comenzar</Link>
                <Outlet />
                </button>
                <div className="cont-2"></div>
                <p>Este juego usará tu cámara web y el aprendizaje automático para analizar 
                    las formas de tus manos. Todo se procesa localmente y no se enviarán ni 
                    almacenarán datos de la cámara web en ninguna parte</p>
            </div>
            
        </div>
    );
}