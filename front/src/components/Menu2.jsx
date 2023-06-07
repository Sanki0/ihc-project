import { Link } from "react-router-dom"
import './styles/Menu.css'

export default function Menu(){
    return (
        <div>
            <div className="container">
                <div className="logo">
                    <img src={"media/logo.jpg"} alt="Logo" className="logo-img" />
                </div>
                <div className="ventanas">
                    <div>
                        <Link className='text-link' to={"/"}>INICIO</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}