import { Link, Outlet } from "react-router-dom"
import Menu from "../components/Menu";

export default function Conocenos() {
    return (
        <div>
            <Menu/>
            <h1>Conocenos</h1>
            <p>Hola</p>
            <div>
                < Outlet />
            </div>
        </div>
    );
}