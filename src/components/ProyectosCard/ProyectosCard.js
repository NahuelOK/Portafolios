import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { getDocs, collection, query } from "firebase/firestore";
import { Link } from "react-router-dom";

function ProyectosCard() {
  const [proyectsList, setProyectsList] = useState([]);
  const proyectsRef = collection(db, "proyects");

  useEffect(() => {
    const getProyectsList = async () => {
      const q = query(proyectsRef);
      const data = await getDocs(q);
      const dataFilter = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setProyectsList(dataFilter);
    };
    getProyectsList();
  }, []);

  return (
    <div className="proyectos">
      {proyectsList.map((proyect) => (
        <div className="proyectos-card" key={proyect.id}>
          <img src={proyect.img} alt={proyect.title}></img>
          <div className="componentes-card">
            <h2>{proyect.title}</h2>
            <p>{proyect.description}</p>
            <Link to={proyect.url} className="btn-ver-producto">
              Ir a ver Proyecto
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProyectosCard;
