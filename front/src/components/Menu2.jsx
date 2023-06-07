import { Link } from "react-router-dom"
import './styles/Menu.css'

export default function Menu(){
    return (
        <div>
            <div className="container">
                <div className="logo">
                    <Link to={"/"}> <img src={"media/logo.jpg"} alt="Logo" className="logo-img" /></Link>
                </div>
                <div className="ventanas">
                    <div>
                        <Link className='text-link' to={"/conocenos"}>INICIO</Link>
                    </div>
                    <div>
                        <Link className='text-link' to={"/formulario"}>SUGERENCIAS</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}