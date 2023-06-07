import { Link, Outlet } from "react-router-dom"
import Menu3 from '../components/Menu3'
import '../styles/Home.css'

export default function Home() {
    return (
        <div>
            <div className="Menu">
                <Menu3/>
            </div>
            <div className="Home">
                <h1>Nivel 1</h1>  
                <h2>Aprende el lenguaje de señas</h2>
                <img></img>
                <h2>¿Estás preparado para el reto?</h2>
            </div>
            {/* <div className="Hola">
            <img src={"abc.jpg"}></img>
                <p>Hola</p>
            </div> */}
        </div>
    );
}