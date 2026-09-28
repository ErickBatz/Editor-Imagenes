import { Link } from "react-router-dom";
import '../styles/variables.css';
import '../styles/galeria.css';

export default function Galeria() {
  // Ejemplo de datos (puedes cambiarlos por tus datos reales o de una API)
  const items = [
    { id: 1, titulo: "Proyecto Alpha", imagen: "https://www.appyweb.es/diccionario/wp-content/uploads/2024/04/Img.jpg" },
    { id: 2, titulo: "Proyecto Beta", imagen: "https://img.magnific.com/foto-gratis/primer-plano-guacamayo-escarlata-lado-primer-plano-cabeza-guacamayo-scarlata_488145-3540.jpg?semt=ais_hybrid&w=740&q=80" },
    { id: 3, titulo: "Proyecto Gamma", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuxxZ3Ev5g2QY060HoPbZwmJ40CFl77T86uz4GgWXRjkkw4LNfCUNyUqk&s=10" },
    { id: 4, titulo: "Proyecto Delta" , imagen: "https://img.magnific.com/vector-gratis/transfiera-concepto-archivos-pagina-destino_23-2148303068.jpg?semt=ais_hybrid&w=740&q=80"}
  ];

  return (
    <div className="galeria">
      {items.map((item) => (
        <div key={item.id} className="card">
          <div className="card-titulo">
            <h2>{item.titulo}</h2>
          </div>
          <div className="card-body">
            <div className="img">
              <img src={item.imagen} alt={item.titulo} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}