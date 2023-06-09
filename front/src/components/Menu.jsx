import { Link } from "react-router-dom"
import './styles/Menu.css'

export default function Menu(){
    return (
        <div className="Menu-navbar">
            <div className="Menu-navbar-left" >
                <Link to="/"> 
                    <img src={"src/assets/logo.jpg"} alt="Logo" className="logo-img" />
                </Link>
                <div className="abajo" >
                    <Link to={"/acerca"}> 
                        <img src={"src/assets/pregunta.jpg"} alt="Logo" className="pregunta-img" />
                    </Link>
                </div>
            </div>
            
            <div className="Menu-navbar-right">
                <div className="nav-link-wrapper">
                    <Link className="nav-link" to={"/conocenos"}>Conócenos</Link>
                </div>
                {/*
                <div className="nav-link-wrapper">
                    <Link className="nav-link" to={"/acerca"}>Misión</Link>
                </div>
                */}
                <div className="nav-link-wrapper">
                    <Link className="nav-link" to={"/formulario"}>Sugerencias</Link>
                </div>
            </div>
            
            
        </div>
        
        
    );
}
