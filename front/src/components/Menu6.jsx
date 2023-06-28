import { Link } from "react-router-dom"
import './styles/Menu6.css'

export default function Menu(){
    return (
        <div className="Menu6-navbar">
            <div className="Menu6-navbar-left" >
                <Link to="/"> 
                    <img src={"src/assets/logo.jpg"} alt="Logo" className="logo-img" />
                </Link>
            
            </div>
            
            <div className="Menu6-navbar-right">
                <div className="nav-link-wrapper">
                    <Link className="nav-link" to={"/elegir-nivel"}>Niveles</Link>
                </div>
            </div>
            
            
        </div>
        
        
    );
}
