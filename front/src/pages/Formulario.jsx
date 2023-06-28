import { Link } from "react-router-dom"
import Menu3 from '../components/Menu3'
import '../styles/Formulario.css'
import React, { useState } from 'react';
import { BsTelephonePlus } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { BsPinMap } from 'react-icons/bs';
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import microPhoneIcon from '../assets/microphone.svg';
import emailjs from '@emailjs/browser';

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
    emailjs.sendForm('service_49honxm', 'template_tm5fojc', event.target, 'R_HvznbR2V6nyHzkT')
      .then((result) => {
        console.log(result.text);
      }
        , (error) => {
          console.log(error.text);
        }
      );
    // change the page after submit
    window.location.href = "/";
  };

  return (
    <div className="Formulario">
      <div className="Formulario-Menu">
        <Menu3 />
      </div>
      <div className="Formulario-Todo">
        <div className="Formulario-izquierda"> {/* Mensaje y datos de contactos */}
          <div className="formulario-espacio"></div>
          <h3 className="Formulario-Titulo">Compartenos&nbsp;&nbsp;tus&nbsp;&nbsp;ideas&nbsp;&nbsp;y&nbsp;&nbsp;opiniones</h3>
          <div className="Formulario-cont2">
            <p> Tienes algunas preguntas y nosotros tenemos toneladas y toneladas de respuestas. Pregúntanos sobre lo que necesites… ¡cualquier cosa con la que podamos ayudarte! No seas tímido, prometemos que somos muy amables 👉
            </p>
            <div className="formulario-espacio"></div>
            <p style={{ fontSize: "30px", fontFamily: "'Harmattan', sans-serif", height: "8vh" }}>
              Información de contacto {/* Contáctanos  */}
            </p>
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
        </div>
        <div className="Formulario-derecha"> {/* Formulario */}
          <div className="Formulario-Form">
            <form onSubmit={handleSubmit}>
              <div className="Formulario-Form-Nombre">
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" value={name} onChange={handleNameChange} autoComplete="off" />
              </div>
              <div className="formulario-espacio"></div>
              <div className="Formulario-Form-Correo">
                <label htmlFor="email">Correo:</label>
                <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} autoComplete="off" />
              </div>
              <div className="formulario-espacio"></div>
              <div className="Formulario-Form-Mensaje">
                <label htmlFor="message">Mensaje:</label>
                <textarea id="message" rows="4" value={message} name="message" onChange={handleMessageChange} autoComplete="off"></textarea>
              </div>
              {/*<div className="formulario-espacio"></div>
              <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
               */}
              <div className="enviar-button ">
                <button className="boton-enviar" type="submit">Enviar</button>
              </div>
            </form>

            <div className="microphone-wrapper">
              <div className="microphone-icon-container" ref={microphoneRef} onClick={handleListing}>
                <img src={microPhoneIcon} className="microphone-icon" />
              </div>
              <div className="microphone-status">
                {isListening ? "Escuchando..." : "Hablar"}
              </div>
              <div className="button ">
                <div className="form-button ">
                  {isListening && (
                    <button className="button-form microphone-stop btn" onClick={stopHandle}>
                      Stop
                    </button>
                  )}
                </div>
              </div>

            </div>
            {transcript && (
              <div className="microphone-result-container">
                <div className="microphone-result-text">{transcript}</div>
                <button className="microphone-reset btn" onClick={handleReset}>
                  Reset
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}