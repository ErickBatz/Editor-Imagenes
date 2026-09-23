const FILTROS = ['Original','Gris','Sepia','Blanco y Negro','Desenfoque'];

export default function HerramientasEdicion({
    imagenCargada,
    filtroActivo,
    onRotarIzquierda,
    onRotarDerecha,
    onRotar180,
    onRegresarRotacion,
    onVoltearHorizontal,
    onVoltearVertical,
    onSeleccionarFiltro,
    onRestablecer,
}){
   
    return(
        <section className="panel">
            <h3>Herramientas de Edicion</h3>
            <div className="grupo">
                <p className="grupo-titulo">Filtros</p>
                <div className="filtros-grid">
                    {FILTROS.map(filtro =>(
                        <button
                            key={filtro}
                            className={`filtro-item ${filtroActivo===filtro ? 'filtro-activo':''}`}
                            disabled = {!imagenCargada}
                            onClick={()=> onSeleccionarFiltro(filtro)}
                        >
                            
                        </button>
                    ))
                    
                    }
                    
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
                    <button disabled={!imagenCargada} onClick={onRotarIzquierda} >90° Izquierda</button>
                    <button disabled={!imagenCargada} onClick={onRotar180} >180 °</button>
                    <button disabled={!imagenCargada} onClick={onRotarDerecha} >90° derecha</button>
                    <button disabled={!imagenCargada} onClick={onRegresarRotacion} >Original</button>
                </div>
            </div>
               
            <div className="botones-transformacion">
                <button disabled={!imagenCargada} onClick={onVoltearHorizontal} >Horizontal</button>
                <button disabled={!imagenCargada} onClick={onVoltearVertical} >Vertical</button>
            </div>

            <div className="acciones-finales">
                <button className="btn-secundari" disabled={!imagenCargada} onClick={onRestablecer}>Restablecer</button>
                <button className="btn-accion">Agregar a galeria</button>
            </div>
            
        </section>
    );
}