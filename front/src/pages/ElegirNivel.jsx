import { Link, Outlet, useLocation } from "react-router-dom";
import Menu from '../components/Menu';
import '../styles/ElegirNivel.css';
import { useEffect, useState } from "react";

export default function Home() {
    const [name, setName] = useState("");
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const nombre = searchParams.get("nombre");
        console.log("nombre :", nombre);
        setName(nombre);
    }, [location]);

    const niveles = [
        { nombre: "Nivel1", ruta: "/comenzar-nivel1" },
        { nombre: "Nivel2", ruta: "/comenzar-nivel2" },
        { nombre: "Nivel3", ruta: "/comenzar-nivel3" }
    ];

    return (
        <div>
            <div className="Elegir-Menu">
                <Menu />
            </div>
            
            <div className="Nivel">
                <div className="cont-1">
                    <h1>
                        {name}&nbsp;&nbsp;demuestra&nbsp;&nbsp;tus&nbsp;&nbsp;habilidades&nbsp;&nbsp;
                        deletreando&nbsp;&nbsp;con&nbsp;&nbsp;señas
                    </h1>
                </div>
                <div className="cont-2"></div>
                <div className="button-container">
                    {niveles.map((nivel, index) => (
                        <div key={index} className="button-item">
                            <Link className="home-link" to={nivel.ruta}>
                                <button className="button-nivel slide-down delay-1">
                                    {nivel.nombre}
                                </button>
                            </Link>  
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
