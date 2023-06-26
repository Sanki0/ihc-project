import { Link, Outlet } from "react-router-dom"
import Menu from '../components/Menu'
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
                <Menu />
            </div>
            {showCounter ? <h1 className="counter-center">{counter}</h1> :
                <div className="Nivel">
                    <div className="cont-1">
                        <h1>Demuestra&nbsp;&nbsp;tus&nbsp;&nbsp;habilidades&nbsp;&nbsp;
                            deletreando&nbsp;&nbsp;con&nbsp;&nbsp;señas</h1>
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