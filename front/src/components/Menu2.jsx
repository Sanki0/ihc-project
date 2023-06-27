import { Link } from "react-router-dom"
import './styles/Menu2.css'

export default function Menu(){
    return (
        <div className="Menu2-navbar">
            <div className="Menu2-navbar-left" >
                <Link to="/"> 
                    <img src={"src/assets/logo.jpg"} alt="Logo" className="logo-img" />
                </Link>
            </div>
            <div className="Menu2-navbar-right">
                <div className="nav-link-wrapper">
                    <Link className="nav-link" to={"/formulario"}>Sugerencias</Link>
                </div>
            </div>
        </div>
    );
}
