import { Link } from "react-router-dom"
import './styles/Menu5.css'

export default function Menu(){
    return (
        <div className="Menu5-navbar">
            <div className="Menu5-navbar-left" >
                <Link to="/"> 
                    <img src={"src/assets/logo.jpg"} alt="Logo" className="logo-img" />
                </Link>
                <div className="menu5-abajo" >
                    <Link to={"/acerca"}> 
                        <img src={"src/assets/pregunta.jpg"} alt="Logo" className="pregunta-img" />
                    </Link>
                </div>
            </div>
            
            <div className="Menu5-navbar-right">
                <div className="nav-link-wrapper">
                    <Link className="nav-link" to={"/elegir-nivel"}>Niveles</Link>
                </div>
            </div>
            
            
        </div>
        
        
    );
}
