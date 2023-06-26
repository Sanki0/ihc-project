import { Link, Outlet } from "react-router-dom"
import Menu3 from '../components/Menu3'
import '../styles/ElegirNivel.css'
import { useState } from "react";

export default function Home() {

    const [counter, setCounter] = useState(0);
    const [showCounter, setShowCounter] = useState(false);
    const [selectedNivel, setSelectedNivel] = useState("");

    const counterTimer = (nivelParameter) => {
        let counter2 = counter;
        const interval = setInterval(() => {
            console.log(counter);
            counter2++;
            setCounter(counter2);
            if (counter2 === 5) {
                clearInterval(interval);
                window.location.href = `/juego?nivel=${nivelParameter}`;
            }
        }, 1000);
    };

    const niveles = ["Nivel1", "Nivel2", "Nivel3"]

    return (
        <div>
            <div className="Menu">
                <Menu3 />
            </div>
            {showCounter ? <h1>{counter}</h1> :
                <div className="Nivel">
                    <div className="cont-1"></div>
                    <h1>Demuestra tus habilidades</h1>
                    <h1>deletreando con señas</h1>
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