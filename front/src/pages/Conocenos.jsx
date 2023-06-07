import { Link, Outlet } from "react-router-dom"
import Menu2 from "../components/Menu2";
import '../styles/Conocenos.css'
import Miembro1 from "./Miembro1";
import Miembro2 from "./Miembro2";
import Miembro3 from "./Miembro3";

export default function Conocenos() {
    return (
        <div className="Menu">
            <Menu2 />
            <h1>Conocenos</h1>
            <div className="Conocenos">
                <div className="Miembro1">
                    <Miembro1 />

                </div>
                <div className="Miembro2">
                    <Miembro2 />
                </div>
                <div className="Miembro3">
                    <Miembro3 />
                </div>
            </div>
        </div>
    );
}