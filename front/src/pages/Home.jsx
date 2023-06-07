import { Link, Outlet } from "react-router-dom"
import Menu from '../components/Menu'
import '../styles/Home.css'

export default function Home() {
    return (
        <div>
            <div className="Menu">
                <Menu/>
            </div>
            <div className="Home">
                <h1>Home</h1>  
            </div>
            <div className="Hola">
                <p>Hola</p>
            </div>
        </div>
    );
}