import { useState } from 'react'
import Header from './conponents/Header'
import CargarFotografia from './conponents/CargarFotografica'
import VistaPrevia from './conponents/VistaPrevia'
import HerramientasEdicion from './conponents/HerramientasEdicion'
import './App.css'

function App() {

  const [imagenOriginal, setImagenOriginal] = useState(null);
  const [rotacion,setRotacion] = useState(0);
  const [volteoH,setVolteoH]= useState(false);
  const [volteoV,setVolteoV] = useState(false);
  const [filtroActivo,setFiltroActivo] = useState('original');

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
    setFiltroActivo('original');
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
          volteoV={filtroActivo}
          />

        <HerramientasEdicion
          imagenCargada={!!imagenOriginal}
          filtroActivo={filtroActivo}
          onRotarIzquierda={()=>rotar(-90)}
          onRotarDerecha={()=>rotar(90)}
          onRotar180={()=>rotar(180)}
          onRegresarRotacion={() => setRotacion(0)}
          onVoltearHorizontal={voltearHorizontal}
          onVoltearVertical={voltearVertical}
          onSeleccionarFiltros={setFiltroActivo}
          onRestablecer={restablecer}
        
        />
      </main>
   </div>
  )
}

export default App
