import { Link, Outlet } from "react-router-dom"
import Menu3 from '../components/Menu3'
import '../styles/Home.css'
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
                <h1>Comenzara en 5 segundos al elegir el nivel</h1>
                {
                    counter === 0 ? <button onClick={counterTimer}>Nivel1</button> : <h1>{counter}</h1>
                }
                {
                    counter === 0 ? <button onClick={counterTimer}>Nivel2</button> : <h1>{counter}</h1>
                }
            </div>
            <Outlet />
        </div>
    );
}