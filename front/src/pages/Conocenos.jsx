import { Link, Outlet } from "react-router-dom"
import Menu2 from "../components/Menu2";
import '../styles/Conocenos.css'

export default function Conocenos() {
    return (
        <div>
            <Menu2/>
            <h1>Conocenos</h1>
            <p>Hola</p>
            <div>
                < Outlet />
            </div>
        </div>
    );
}