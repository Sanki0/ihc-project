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
    // change to elegir-nivel
    // window.location.href = `/juego?nivel=${nivelParameter}`;
    console.log("name", name)

    window.location.href = `elegir-nivel?nombre=${name}`;
  };

  return (
    <div className="All-Register-jsx">
      <div className="Register-Menu">
        <Menu />
      </div>
      <div className="Register-Todo-RegisterName">

        <div className="Register-derecha-RegisterName"> {/* Formulario */}
          <div className="Formu">
            <form onSubmit={handleSubmit}>
              <div className="RegisterName">
                <label htmlFor="name">¿Cuál es tu nombre?</label>
                <h2 className= "palabra">¡Escríbelo o dilo!</h2>
                <input type="text" id="name" value={name} onChange={handleNameChange} autoComplete="off"  className="caja-texto" />
              </div>

              <button className="btnviar" type="submit">Enviar</button>
            </form>
          </div>
        </div>


        <div className='center-elements'>
          <img src={microPhoneIcon} ref={microphoneRef} onClick={handleListing} className="microRegisterName" />
        </div>
        <div className="center-elements">
          {isListening ? <p className='explain-text'> Escuchando... </p> : <p className='explain-text'>Puede llenar su nombre de manera manual o dando click al microfono (Comience con Nombre para que pueda ser completado correctamente) </p>}
        </div>
        {/* <div className="re-button">
          <div className="register-button">
            {isListening && (
              <button className="register-button-form microphone-stop btn" onClick={stopHandle}>
                Stop
              </button>
            )}
          </div>
        </div> */}
      </div>
    </div >

  );
}