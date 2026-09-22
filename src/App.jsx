import Header from './conponents/Header'
import CargarFotografia from './conponents/CargarFotografica'
import VistaPrevia from './conponents/VistaPrevia'
import HerramientasEdicion from './conponents/HerramientasEdicion'
import './App.css'

function App() {

  return (
   <div className="app">
      <header/>
      <main className="editor-layout">
        <CargarFotografia/>
        <VistaPrevia/>
        <HerramientasEdicion/>
      </main>
   </div>
  )
}

export default App
