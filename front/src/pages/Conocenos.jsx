import { Link, Outlet } from "react-router-dom"
import Menu2 from "../components/Menu2";
import '../styles/Conocenos.css'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
/* import { FaEquals, FaPlus} from 'react-icons/fa'; */

export default function Conocenos() {
    return (
        <div className="Conocenos">
            <div className="conocenos-Menu">
                <Menu2 />
            </div>
            <div className="conocenos-container">
                <div className="conocenos-descripcion">
                    <div className="conocenos-descripcion-espacio"></div>
                    <h3>Nuestro&nbsp;&nbsp;equipo</h3>
                    <div className="conocenos-descripcion-espacio"></div>
                    <p className=" Acerca a ">Hecho con amor por alumnos de la Universidad Nacional de Ingeniería  apasionados por la tecnología y comprometidos con la excelencia en el desarrollo de software<br ></br> <span className="espacio-blanco"> </span>Creamos esta herramienta para facilitar que los niños, jóvenes y adultos sordos o mudos aprendan el ABC de la lengua de señas peruana a través del deletreo manual.<br ></br> 
                    <span className="espacio-blanco"> </span> Estamos comprometidos con la calidad, innovación y el cumplimiento de los plazos de entrega<br ></br> 
                    <span className="espacio-blanco"> </span>Aprenda más sobre la <a href="https://repositorio.minedu.gob.pe/handle/20.500.12799/5545">lengua de señas</a> o has una <a href="https://www.ensenasperu.org/involucrate.php">donación</a>
                        <br ></br> Seguimiento de manos por <a href="https://www.w3schools.com">TensorFlow.js</a>
                    </p>
                    
                </div>
                <div className="conocenos-miembros">
                    <div className="miembro">
                        <div className="image-box glowing"></div>
                        <div className="datos">
                            <h4 className="datos-nombre">Sebastian Ferreyra</h4>
                            <p className="datos-descripcion">Bachiller en Ciencia de la Computación (UNI), con experiencia en desarrollo web y un interés particular en el área de DevOps, 
                            busca combinar su conocimiento técnico con las mejores prácticas de implementación y gestión de proyectos. </p>
                            <div className="datos-redes">
                                <div className="redsocial">
                                    <a href="https://www.linkedin.com/aberrospic" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin />
                                    </a>
                                </div>
                                <div className="redsocial">
                                    <a href="https://www.linkedin.com/aberrospic" target="_blank" rel="noopener noreferrer">
                                        <FaGithub />
                                    </a>
                                </div>
                                <div className="redsocial">
                                    <a href="https://www.linkedin.com/aberrospic" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                            <div className="espacio-blanco"></div>
                        </div>
                    </div>
                    <div className="miembro">
                        <div className="image-box glowing"></div>
                        <div className="datos">
                            <h4 className="datos-nombre">Abraham Berrospi</h4>
                            <p className="datos-descripcion">Bachiller en Ciencia de la Computacion(UNI), entusiasta de la tecnología con una pasión por el mundo de Linux, infraestructura y desarrollo full stack. 
                            Posee experiencia en la administración de sistemas, virtualización y despliegue de aplicaciones. 
                            Su enfoque versátil le permite trabajar en diferentes capas de una aplicación, desde el back-end hasta el front-end</p>
                            <div className ="datos-redes">
                                <div className="redsocial">
                                    <a href="https://www.linkedin.com/aberrospic" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin />
                                    </a>
                                </div>
                                <div className="redsocial">
                                    <a href="https://www.linkedin.com/aberrospic" target="_blank" rel="noopener noreferrer">
                                        <FaGithub />
                                    </a>
                                </div>
                                <div className="redsocial">
                                    <a href="https://www.linkedin.com/aberrospic" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                            <div className="espacio-blanco"></div>
                        </div>
                    </div>
                    <div className="miembro">
                        <div className="image-box glowing"></div>
                        <div className="datos">
                            <h4 className="datos-nombre">Gabriela Colque</h4>
                            <p className="datos-descripcion">Bachiller en Ciencia de la Computacion(UNI), se especializa en el campo de la Inteligencia Artificial. 
                            Con un profundo interés en el aprendizaje automático y el procesamiento del lenguaje natural, busca aplicar sus conocimientos en proyectos innovadores. </p>
                            <div className="datos-redes">
                                <div className="redsocial">
                                    <a href="https://www.linkedin.com/aberrospic" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin />
                                    </a>
                                </div>
                                <div className="redsocial">
                                    <a href="https://www.linkedin.com/aberrospic" target="_blank" rel="noopener noreferrer">
                                        <FaGithub />
                                    </a>
                                </div>
                                <div className="redsocial">
                                    <a href="https://www.linkedin.com/aberrospic" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                            <div className="espacio-blanco"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}