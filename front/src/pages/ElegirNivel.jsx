import { Link, Outlet } from "react-router-dom"
import Menu3 from '../components/Menu3'
import '../styles/ElegirNivel.css'
import { useState } from "react";

export default function Home() {

    const [counter, setCounter] = useState(0);

    const counterTimer = () => {
        let counter2 = counter;
        const interval = setInterval(() => {
            console.log(counter);
            counter2++;
            setCounter(counter2);
            if (counter2 === 5) {
                clearInterval(interval);
                window.location.href = "/juego";
            }
        }, 1000);
    };

    const niveles = ["Nivel1", "Nivel2"]

    return (
        <div>
            <div className="Menu">
                <Menu3 />
            </div>
            <div className="Home">
                <div className="cont-1"></div>
                <h1>Comenzara en 5 segundos al elegir el nivel</h1>
                <div className="cont-2"></div>
                <div className="button-container">
                    <div className="button-item">
                        {counter === 0 ? (
                            <button onClick={counterTimer} className="button-nivel slide-down delay-1" role="button">
                            Nivel 1
                            </button>
                        ) : (
                            <h1>{counter}</h1>
                        )}
                    </div>
                    <div className="button-item">
                        {counter === 0 ? (
                            <button onClick={counterTimer} className="button-nivel slide-down delay-1" role="button">
                            Nivel 2
                            </button>
                        ) : (
                            <h1>{counter}</h1>
                        )}
                    </div>
                    <div className="button-item">
                        {counter === 0 ? (
                            <button onClick={counterTimer} className="button-nivel slide-down delay-1" role="button">
                            Nivel 3
                            </button>
                        ) : (
                            <h1>{counter}</h1>
                        )}
                    </div>
                    <div className="button-item">
                        {counter === 0 ? (
                            <button onClick={counterTimer} className="button-nivel slide-down delay-1" role="button">
                            Nivel 4
                            </button>
                        ) : (
                            <h1>{counter}</h1>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}