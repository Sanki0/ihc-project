import { Link } from "react-router-dom"
import './styles/Menu3.css'

export default function Menu(){
    return (
        <div className="Menu3-navbar">
            <div className="Menu3-navbar-left" >
                <Link to="/">
                    <img src={"src/assets/logo.jpg"} alt="Logo" className="logo-img" />
                </Link>
            </div>
            <div className="Menu3-navbar-right">
                <div className="nav3-link-wrapper">
                    <Link className="nav3-link" to={"/conocenos"}>Conócenos</Link>
                </div>
            </div>
        </div>
    );
}
