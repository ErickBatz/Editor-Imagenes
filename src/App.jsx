import { useState } from 'react'
import Header from './conponents/Header'
import CargarFotografia from './conponents/CargarFotografica'
import VistaPrevia from './conponents/VistaPrevia'
import HerramientasEdicion from './conponents/HerramientasEdicion'
import './App.css'

function App() {

  const [imagenOriginal, setImagenOriginal] = useState(null);

  return (
   <div className="app">
      <Header/>
      <main className="editor-layout">
        <CargarFotografia onImagenCargada={setImagenOriginal} />
        <VistaPrevia imagenOriginal={imagenOriginal} />
        <HerramientasEdicion/>
      </main>
   </div>
  )
}

export default App
