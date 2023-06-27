import { Link, Outlet, useLocation } from "react-router-dom"
import Menu from '../components/Menu'
import '../styles/ComenzarNivel.css'
import { useEffect, useState } from "react";

export default function Home() {

    const [counter, setCounter] = useState(0);
    const [showCounter, setShowCounter] = useState(false);
    const [selectedNivel, setSelectedNivel] = useState("");
    const [name, setName] = useState("")
    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const nombre = searchParams.get("nombre");
        console.log("nombre :", nombre);
        setName(nombre)
    }, [location]);

    const counterTimer = (nivelParameter) => {
        let counter2 = counter;
        const interval = setInterval(() => {
            console.log(counter);
            counter2++;
            setCounter(counter2);
            if (counter2 === 3) {
                clearInterval(interval);
                window.location.href = `/juego?nivel=${nivelParameter}`;
            }
        }, 1000);
    };

    const niveles = ["Nivel1", "Nivel2", "Nivel3"]

    return (
        <div>
            <div className="Menu">
                <Menu />
            </div>
            {showCounter ? <h1 className="counter-center">{counter}</h1> :
                <div className="Nivel">
                    {/* <div className="elegir-nivel-nombre">Hola {name}</div> */}
                    <div className="cont-1">
                        <h1>{name}&nbsp;&nbsp;Nivel&nbsp;&nbsp;3</h1>
                    </div>
                    <div className="cont-2"></div>
                    <div className="button-container">
                        {niveles.map((nivel, index) => {
                            return (
                                <div key={index} className="button-item">
                                    <button
                                        className="button-nivel slide-down delay-1"
                                        onClick={() => {
                                            console.log(index);
                                            setSelectedNivel(nivel);
                                            console.log(selectedNivel);
                                            setShowCounter(true);
                                            counterTimer(nivel);
                                        }}>
                                        {nivel}
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }

        </div>
    );
}