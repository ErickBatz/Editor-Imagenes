export default function CargarFotografia(){
    return(
        <section className="panel">
            <h3>Cargar Fotografia</h3>
            <div className="dropzone">
                <p>subir</p>
                <p>Arrastrar una imagen</p>
                <p>o</p>
                <button className="btn-primario">Seleccionar Archivo</button>
                <p className="hint">Formatos permitidos:JPG * PNG * WEBP </p>
            </div>
            <p className="hint-small">
                El tamaño maximo de imagenes permitido es de 10MB. La imagen se procesa en su navegador
            </p>
        </section>
    );
}