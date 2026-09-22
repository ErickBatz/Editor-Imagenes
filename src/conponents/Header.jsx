export default function Header(){

    return(
        <header className="app-header">
            <div className="logo">Editor de fotos</div>
            <div className="header-actions">
                <button className="btn-ghost">ver galeria</button>
                <span className="usuario">Usuario</span>
            </div>
        </header>
    );
}