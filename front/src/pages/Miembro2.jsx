import { Link } from "react-router-dom"
import Menu from '../components/Menu'

import foto from '../assets/foto2.jpg'


export default function Miembro2() {
    return (
        <div>
            <p>Hola soy Miembro2</p>
            <img src={foto} alt="foto1" />

        </div>
    )
}