export default function HerramientasEdicion(){
    return(
        <section className="panel">
            <h3>Herramientas de Edicion</h3>
            <div className="grupo">
                <p className="grupo-titulo">Filtros</p>
                <div className="filtros-grid">
                    <div className="filtro-item">Original</div>
                    <div className="filtro-item">Gris</div>
                    <div className="filtro-item">Sepia</div>
                    <div className="filtro-item">B/N</div>
                    <div className="filtro-item">Desenfoque</div>
                </div>
            </div>
            <div className="grupo">
                <p className="grupo-titulo">Ajustes</p>
                <label>Brillo</label>
                <input type="range" disabled/>
                <label>Contraste</label>
                <input type="range" disabled/>
                <label>Saturacion</label>
                <input type="range" disabled/>
            </div>

            <div className="group">
                <p className="grupo-titulo">Transformar</p>
                <div className="botones-transformar">
                    <button disabled>90° Izquierda</button>
                    <button disabled >180 °</button>
                    <button disabled >90° derecha</button>
                    <button disabled>Original</button>
                </div>
            </div>
               
            <div className="botones-transformacion">
                <button disabled >Horizontal</button>
                <button disabled >Vertical</button>
            </div>

            <div className="acciones-finales">
                <button className="btn-secundari">Restablecer</button>
                <button className="btn-accion">Agregar a galeria</button>
            </div>
            
        </section>
    );
}