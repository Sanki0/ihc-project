import { Link } from "react-router-dom"
import './styles/Menu.css'

export default function Menu(){
    return (
            <div className="Menu-navbar">
                <div className="Menu-navbar-left">
                    <img src={"abc-svgrepo-com.svg"} alt="Logo" className="logo-img" />
                </div>
                <div className="Menu-navbar-right">
                    <div>
                        <Link className='nav-link' to={"/conocenos"}>Conócenos</Link>
                    </div>
                    <div>
                        <Link className='nav-link' to={"/formulario"}>Sugerencias</Link>
                    </div>
                </div>
            </div>
    );
}