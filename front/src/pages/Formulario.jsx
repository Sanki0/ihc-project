import { Link } from "react-router-dom"
import Menu from '../components/Menu'
import '../styles/Formulario.css'
import React, { useState } from 'react';
import { BsTelephonePlus } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { BsPinMap } from 'react-icons/bs';
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import microPhoneIcon from '../assets/microphone.svg';


export default function Formulario() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const commands = [
        {
            command: 'nombre *',
            callback: (name) => setName(name)
        },
        {
            command: 'correo *',
            callback: (email) => {
                email = email.replace("arroba", "@");
                setEmail(email)
            }
        },
        {
            command: 'mensaje *',
            callback: (message) => setMessage(message)
        },

    ]

    const { transcript, resetTranscript } = useSpeechRecognition({ commands })
    const [isListening, setIsListening] = useState(false);
    const microphoneRef = React.useRef(null);

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return (
            <div className="mircophone-container">
                Browser is not Support Speech Recognition.
            </div>
        );
    }

    const handleListing = () => {
        setIsListening(true);
        microphoneRef.current.classList.add("listening");
        SpeechRecognition.startListening({
            continuous: true,
            language: "es-PE",
        });
    }

    const stopHandle = () => {
        setIsListening(false);
        microphoneRef.current.classList.remove("listening");
        SpeechRecognition.stopListening();
    }

    const handleReset = () => {
        stopHandle();
        resetTranscript();
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para manejar el envío del formulario
        console.log('Nombre:', name);
        console.log('Email:', email);
        console.log('Mensaje:', message);
    };

    return (
        <div>

            <div className="microphone-wrapper">
                <div
                    className="microphone-icon-container"
                    ref={microphoneRef}
                    onClick={handleListing}
                >
                    <img src={microPhoneIcon} className="microphone-icon" />
                </div>
                <div className="microphone-status">
                    {isListening ? "Escuchando........." : "Click para empezar a escuchar"}
                </div>
                {isListening && (
                    <button className="microphone-stop btn" onClick={stopHandle}>
                        Stop
                    </button>
                )}
            </div>
            {transcript && (
                <div className="microphone-result-container">
                    <div className="microphone-result-text">{transcript}</div>
                    <button className="microphone-reset btn" onClick={handleReset}>
                        Reset
                    </button>
                </div>
            )}

            <div className="Formulario">
                <div className="Formulario-Menu">
                    <Menu />
                </div>
                <div className="Formulario-cont1"></div>
                <div className="Formulario-Titulo">
                    Compartenos&nbsp;&nbsp;tus&nbsp;&nbsp;ideas&nbsp;&nbsp;y&nbsp;&nbsp;opiniones
                </div>
                <div className="Formulario-Todo">
                    <div className="Formulario-izquierda"> {/* Mensaje y datos de contactos */}
                        <p className="Formulario-cont2">
                            You’ve got some Q’s and we’ve got tons and tons of A’s. Ask us about an order, a product, what you should name your puppy…anything we can help with! Don’t be shy - we promise we’re really nice 👉
                        </p>
                        <p style={{ fontSize: "30px", fontFamily: "'Harmattan', sans-serif", height: "6vh" }}>
                            Información de contacto {/* Contáctanos  */}
                        </p>
                        <div className="Titulo-Linea"></div>
                        <p className="Formulario-info">
                            <BsTelephonePlus style={{ color: "#404040", height: "30px" }} />
                            (+51) 936 824 941
                            {/* <br></br>(+51) 995 126 424 */}
                        </p>
                        <p className="Formulario-info">
                            <TfiEmail style={{ color: "#404040", height: "30px" }} />
                            aberrospic@uni.pe
                            {/* <br></br>sferreyraa@uni.pe */}
                        </p>
                        <p className="Formulario-info">
                            <BsPinMap style={{ color: "#404040", height: "30px" }} />
                            Jirón Enrique Barrón 1381
                        </p>
                    </div>
                    <div className="Formulario-derecha"> {/* Formulario */}
                        {/* <p style={{fontSize: "30px", fontFamily: "'Harmattan', sans-serif", height: "6vh"}}>
                        Mandanos una sugerencia 
                    </p>
                    <div className="Titulo-Linea"></div> */}
                        <div className="Formulario-Form">
                            <form onSubmit={handleSubmit}>
                                <div className="Formulario-Form-Nombre">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" value={name} onChange={handleNameChange} autoComplete="off" />
                                </div>
                                <div className="Formulario-Form-Correo">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" value={email} onChange={handleEmailChange} autoComplete="off" />
                                </div>
                                <div className="Formulario-Form-Mensaje">
                                    <label htmlFor="message">Message:</label>
                                    <textarea id="message" rows="4" value={message} onChange={handleMessageChange} autoComplete="off"></textarea>
                                </div>
                                <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
                                <button className="boton-enviar" type="submit">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/*                 <div className="Formulario-Form-Nombre">
                    <input type="text" label="name" placeholder="Focus the input and see the colors" />
                </div>
                <div className="Formulario-Form-Correo">
                    <input type="text" label="name" placeholder="Focus the input and see the colors" />
                </div>
                <div className="Formulario-Form-Mensaje">
                    <input type="text" label="name" placeholder="Focus the input and see the colors" /> 
                </div>
                <div className="Formularion-Datos">
                    c
                </div> */}


            </div>
        </div>

    );
}