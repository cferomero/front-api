"use client"

// Componentes
import { CardFly } from "./Components/CardFly";

// React
import { useEffect, useState } from "react";
import axios from "axios";


// Ruta de la Api
const routeEndpoint = 'http://localhost:8000';

interface Flyght {
  id: string;
  ciudadSalida: string;
  ciudadDestino: string;
  fechaVuelo: string;
  horaSalida: string;
  ciudad: string;
  aeropuerto: string;
}


export default function Home() {
  const [flyghts, setFlyghts]  = useState<Flyght[]>([]);

  useEffect(() => {
    getAllFlyghts();
  },[])

  const getAllFlyghts = async () => {
    try {
      const response = await axios.get<Flyght[]>(`${routeEndpoint}/flyghts`);
      setFlyghts(response.data);
    } catch(error) {
      console.error('Error: ', error);
    }
  }
  return (
    <div>
      <h2 className="text-center text-4xl">Vuelos principales</h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 shadow-sm sm:w-full bg-background hover:shadow-lg transition p-5 mt-5 bg-slate-300 rounded">
        {/* Renderizamis y mapeamos cada uno de los registros de la base de datos */}
        {flyghts.map((flyght) => (
          <CardFly
            key={flyght.id}
            flyght={flyght}
          />
        ))}
      </div>
    </div>
  );
}
