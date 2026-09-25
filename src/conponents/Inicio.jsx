import { Link } from "react-router-dom";
import '../index.css'
export default function Inicio (){
    return(
        <div className="inicio">
            <div className="titulo">
                <h2>Bienvenidos Al Editor de Imagenes</h2>
            </div>
            <div className="contenido">
                <p>Hola usuario te damos la bienvenida al editor de imagenes 
                    usando tecnologia React
                </p>

            <Link to='/editor' >
                <button>Abrir Editor</button>
            </Link>
            </div>
        </div>
    );
}