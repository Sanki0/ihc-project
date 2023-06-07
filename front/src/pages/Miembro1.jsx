import { Link } from "react-router-dom"
import Menu from '../components/Menu'
import foto from '../assets/foto1.jpg'


export default function Miembro1() {
    return (
        <div>
            <p>Hola soy Sebastian Ferreyra</p>
            <img src={foto} alt="foto1" className="foto-img"/>

        </div>
    )
}