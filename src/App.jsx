import { useState } from 'react'
import Header from './conponents/Header'
import CargarFotografia from './conponents/CargarFotografica'
import VistaPrevia from './conponents/VistaPrevia'
import HerramientasEdicion from './conponents/HerramientasEdicion'
import './App.css'

function App() {

  const [imagenOriginal, setImagenOriginal] = useState(null);
  const [imagenProcesada,setImagenProcesada] = useState(null);
  const [rotacion,setRotacion] = useState(0);
  const [volteoH,setVolteoH]= useState(false);
  const [volteoV,setVolteoV] = useState(false);
  const [filtroActivo,setFiltroActivo] = useState('Original');
  const[brillo,setBrillo] = useState(100);
  const [constraste, setContraste] = useState(100);
  const [saturacion,setSaturacion] = useState(100);
  const [galeria, setGaleria] = useState([]);

  function rotar(grados){
    setRotacion(prev=>(prev+grados+360)%360)
  }

  function voltearHorizontal(){
    setVolteoH(prev=>!prev);
  }

  function voltearVertical(){
    setVolteoV(prev=>!prev);
  }

  function restablecer(){
    setRotacion(0);
    setVolteoH(false);
    setVolteoV(false);
    setFiltroActivo('Original');
    setBrillo(100);
    setContraste(100);
    setSaturacion(100);  
  }
  function agregarGaleria(){
    if(!imagenProcesada) return;

    setGaleria(prev => [...prev,imagenProcesada]);
    console.log('Galeria Actualizada, total de imagenes: ',galeria.length+1);

    setImagenOriginal(null);
    setImagenProcesada(null);
    restablecer();
  }

  return (
   <div className="app">
      <Header/>
      <main className="editor-layout">
        <CargarFotografia onImagenCargada={setImagenOriginal} />
        <VistaPrevia 
          imagenOriginal={imagenOriginal}
          rotacion={rotacion}
          volteoH={volteoH}
          volteoV={volteoV}
          filtroActivo={filtroActivo}
          brillo={brillo}
          constraste={constraste}
          saturacion={saturacion}
          onImagenProcesada={setImagenProcesada}
          />

        <HerramientasEdicion
          imagenCargada={!!imagenOriginal}
          filtroActivo={filtroActivo}
          brillo={brillo}
          constraste={constraste}
          saturacion={saturacion}
          onCambiarBrillo={setBrillo}
          onCambiarSaturacion={setSaturacion}
          onRotarIzquierda={()=>rotar(-90)}
          onRotarDerecha={()=>rotar(90)}
          onRotar180={()=>rotar(180)}
          onRegresarRotacion={() => setRotacion(0)}
          onVoltearHorizontal={voltearHorizontal}
          onVoltearVertical={voltearVertical}
          onSeleccionarFiltro={setFiltroActivo}
          onRestablecer={restablecer}
          onAgregarGaleria={agregarGaleria}
        
        />
      </main>
   </div>
  )
}

export default App
