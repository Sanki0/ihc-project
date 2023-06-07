import { Link } from "react-router-dom"
import Menu from '../components/Menu'
import foto from '../assets/foto3.jpg'


export default function Miembro3() {
    return (
        <div>

            <p>Hola soy Gabriela Colque</p>
            <img src={foto} alt="foto1" className="foto-img"/>

        </div>
    )
}