import { Link } from "react-router-dom";

export default function Header(){

    return(
        <header className="app-header">
            <div className="logo">Editor de fotos</div>
            <div className="header-actions">
                <Link to='/galeria' >
                    <button className="btn-ghost">ver galeria</button>
                </Link>
    
                <Link to='/login' >
                    <span className="usuario">Usuario</span>
                </Link>
                
            </div>
        </header>
    );
}