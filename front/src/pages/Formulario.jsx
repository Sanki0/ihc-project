import { Link } from "react-router-dom"
import Menu from '../components/Menu'
import '../styles/Formulario.css'

export default function Formulario() {
    return (
        <div className="Menu">
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                <label>
                    Comentario:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}