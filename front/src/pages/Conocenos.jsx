import { Link, Outlet } from "react-router-dom"
import Menu2 from "../components/Menu2";
import '../styles/Conocenos.css'
import foto1 from '../assets/foto1.jpg'
import foto2 from '../assets/foto2.jpg'
import foto3 from '../assets/foto3.jpg'

export default function Conocenos() {
    return (
        <div className="Conocenos">
            <div className="conocenos-Menu">
                <Menu2 />
            </div>
            <div className="conocenos-container">
                <div className="conocenos-descripcion">
                    {/* <p></p> */}
                    <p>Somos un equipo de profesionales apasionados por la tecnología y comprometidos con la excelencia en el desarrollo de software. Nos especializamos en diferentes áreas para ofrecer soluciones innovadoras y de calidad a nuestros clientes.<br></br>
                    Nuestro equipo se caracteriza por su colaboración estrecha, su creatividad y su enfoque en la excelencia técnica. Trabajamos de la mano con nuestros clientes para comprender sus necesidades y ofrecer soluciones personalizadas que impulsen su éxito. 
                    Estamos comprometidos con la calidad, la innovación y el cumplimiento de los plazos de entrega.
                    </p>
                </div>
                <div className="conocenos-miembros">
                    <div className="miembro">
                        <img src={foto1} alt="foto1" className="foto-img"/>
                        <div className="datos">
                            <h4 className="datos-nombre">Sebastian Ferreyra</h4>
                            <p className="datos-descripcion">Bachiller en Ciencia de la Computación (UNI), con experiencia en desarrollo web y un interés particular en el área de DevOps, 
                            busca combinar su conocimiento técnico con las mejores prácticas de implementación y gestión de proyectos. </p>
                            <div class="datos-redes">
                                <div class="redsocial">a</div>
                                <div class="redsocial">b</div>
                                <div class="redsocial">c</div>
                            </div>
                        </div>
                    </div>
                    <div className="miembro">
                        <img src={foto2} alt="foto1" className="foto-img" />
                        <div className="datos">
                            <h4 className="datos-nombre">Abraham Berrospi</h4>
                            <p className="datos-descripcion">Bachiller en Ciencia de la Computacion(UNI), entusiasta de la tecnología con una pasión por el mundo de Linux, infraestructura y desarrollo full stack. 
                            Posee experiencia en la administración de sistemas, virtualización y despliegue de aplicaciones. 
                            Su enfoque versátil le permite trabajar en diferentes capas de una aplicación, desde el back-end hasta el front-end</p>
                            <p></p>
                        </div>
                    </div>
                    <div className="miembro">
                        <img src={foto3} alt="foto1" className="foto-img"/>
                        <div className="datos">
                            <h4 className="datos-nombre">Gabriela Colque</h4>
                            <p className="datos-descripcion">Bachiller en Ciencia de la Computacion(UNI), se especializa en el campo de la Inteligencia Artificial. 
                            Con un profundo interés en el aprendizaje automático y el procesamiento del lenguaje natural, busca aplicar sus conocimientos en proyectos innovadores. </p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}