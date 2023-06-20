import React, { useState } from 'react';
import 'regenerator-runtime/runtime'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import microPhoneIcon from '../assets/microphone.svg';
import Menu from '../components/Menu'

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
    <div className="container">
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

        <div className="Formulario-Todo">

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

                <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
                <button className="boton-enviar" type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}