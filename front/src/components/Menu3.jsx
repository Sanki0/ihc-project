import { Link } from "react-router-dom"
import './styles/Menu.css'

export default function Menu(){
    return (
        <div>
            <div className="container">
                <div className="logo">
                    <img src={"abc-svgrepo-com.svg"} alt="Logo" className="logo-img" />
                </div>
                <div className="ventanas">
                    <div>
                        <Link className='text-link' to={"/conocenos"}>NIVELES</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}