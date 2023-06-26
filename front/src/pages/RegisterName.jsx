import React, { useState } from 'react';
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import microPhoneIcon from '../assets/microphone.svg';
import Menu from '../components/Menu'
import '../styles/RegisterName.css'

export default function RegisterName() {
  const [name, setName] = useState('');

  const commands = [
    {
      command: 'nombre *',
      callback: (name) => setName(name)
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

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Tu nombre es ${name}`);
  };

  return (
    <div className="All-Register-jsx">

      <div className="Formulario-Menu">
        <Menu />
      </div>


      <div className="Formulario-Todo-RegisterName">

        <div className="Formulario-derecha-RegisterName"> {/* Formulario */}
          {/* <p style={{fontSize: "30px", fontFamily: "'Harmattan', sans-serif", height: "6vh"}}>
                        Mandanos una sugerencia 
                    </p>
                    <div className="Titulo-Linea"></div> */}
          <div className="Formulario-Form">
            <form onSubmit={handleSubmit}>
              <div className="Formulario-Form-Nombre-RegisterName">
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" value={name} onChange={handleNameChange} autoComplete="off" />
              </div>

              <button className="boton-enviar" type="submit">Enviar</button>
            </form>
          </div>
        </div>


        <div className='center-elements' ref={microphoneRef} onClick={handleListing}>
          <img src={microPhoneIcon} className="microphone-icon-RegisterName" />
        </div>
        <div className="center-elements">
          {isListening ? <p className='explain-text'> Escuchando... </p> : <p className='explain-text'>Puede llenar su nombre de manera manual o dando click al microfono (Comience con Nombre para que pueda ser completado correctamente) </p>}
        </div>

      </div>


      {/* <div className="microphone-wrapper-RegisterName">
        <div className="microphone-icon-container-RegisterName" ref={microphoneRef} onClick={handleListing}>
          <img src={microPhoneIcon} className="microphone-icon-RegisterName" />
        </div>
        <div className="microphone-status-RegisterName">
          {isListening ? "Escuchando..." : "Hablar"}
        </div>
      </div> */}

      {/* {transcript && (
        <div className="microphone-result-container">
          <div className="microphone-result-text">{transcript}</div>
          <button className="microphone-reset btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      )} */}

    </div >

  );
}