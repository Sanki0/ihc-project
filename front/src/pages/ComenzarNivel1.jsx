import { Link, Outlet, useLocation } from "react-router-dom"
import Menu5 from '../components/Menu5'
import '../styles/ComenzarNivel.css'
import { useEffect, useState } from "react";

export default function Home() {

    const [selectedNivel] = useState("Nivel1");
    const [counter, setCounter] = useState(3);
    const [showCounter, setShowCounter] = useState(false);
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
            counter2--;
            setCounter(counter2);
            if (counter2 === 1) {
                clearInterval(interval);
                window.location.href = `/juego?nivel=${nivelParameter}`;
            }
        }, 1000);
    };
    return (
        <div>
            <div className="Menu">
                <Menu5 />
            </div>
            {showCounter ? ( <div className="container">
                                <div className="box">
                                    <div className="instruction">DELETREA LA PALABRA </div>
                                    <div className="word">CASA</div>
                                    <div className="counter">{counter}</div>
                                    <div className="word-counter">Palabra 1 de 5</div>
                                </div>
                             </div>
                            ) :
                <div className="Niveles">
                    {/* <div className="elegir-nivel-nombre">Hola {name}</div> */}
                    <div className="conti1">
                        <h1>{name}&nbsp;&nbsp;Nivel&nbsp;&nbsp;1</h1>
                    </div>
                    <div className="contenido"></div>
                    <p className=" mensaje">Aquí aprenderás las siguientes<br ></br>  letras : A, B, C, E, L, O, V, W, U, Y<br ></br> <span className="espacio-blanco"> </span>
                    Cuando comience, observe la mano e <br ></br>  imite con su propia mano<br ></br> 
                    </p>
                    <div className="conti2"></div>
                    <div className="butcontainer">
                        <img src={"src/assets/camara.jpg"} alt="Logo" 
                            className="iconcamara"
                            onClick={() => {
                                console.log(selectedNivel);
                                setShowCounter(true);
                                counterTimer(selectedNivel);
                            }}
                        />
                        
                    </div>
                </div>
            }

        </div>
    );
}