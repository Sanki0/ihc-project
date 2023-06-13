import { Link, Outlet } from "react-router-dom"
import Menu2 from "../components/Menu2";
import '../styles/Conocenos.css'
import foto1 from '../assets/foto1.jpg'
import foto2 from '../assets/foto2.jpg'
import foto3 from '../assets/foto3.jpg'

export default function Conocenos() {
    return (
        <div className="Conocenos">
            <div className="conocenos-Menu">
                <Menu2 />
            </div>
            <div className="conocenos-container">
                <div className="conocenos-descripcion">
                    {/* <p></p> */}
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, a consequatur quo dolorem labore expedita distinctio perspiciatis doloribus modi necessitatibus eligendi odit voluptates atque totam inventore ipsum magni dolores nihil! Dolores, fugiat. Voluptas id ullam suscipit quibusdam perspiciatis quam dicta, iusto vel delectus, atque tempore iste, quos aspernatur harum?</p>
                </div>
                <div className="conocenos-miembros">
                    <div className="miembro">
                        <img src={foto1} alt="foto1" className="foto-img"/>
                        <p className="nombre">Sebastian Ferreyra</p>
                    </div>
                    <div className="miembro">
                        <img src={foto2} alt="foto1" className="foto-img" />
                        <p className="nombre">Abraham Berrospi</p>
                    </div>
                    <div className="miembro">
                        <img src={foto3} alt="foto1" className="foto-img"/>
                        <p className="nombre">Gabriela Colque</p>
                    </div>
                </div>
            </div>
        </div>
    );
}