import { Link } from "react-router-dom"

export default function Menu(){
    return (
        <div>
            <Menu/>
            <Link to={"/"}>Home</Link>
            <Link to={"/formulario"}>Formulario</Link>
        </div>
    );
}