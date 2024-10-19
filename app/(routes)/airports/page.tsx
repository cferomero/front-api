// Page ruta, donde voy a rendirizar el componentes de los aeropuertos en el sistema
"use client";
// React
import { useEffect, useState } from "react";
import axios from "axios";
import { CardAirport } from "./components/CardAirport";

// Ruta de la API
const routeEndpoint = 'http://localhost:8000';


interface Airport {
    id: string;
    city: string;
    name: string;
    country: string;
    iata: string;
}

export default function PageAirports() {
    const [airports, setAirports] = useState<Airport[]>([]);

    useEffect(() => {
        getAllAirports();
    }, []);

    const getAllAirports = async () => {
        try {
            const response = await axios.get<Airport[]>(`${routeEndpoint}/airports`);
            setAirports(response.data);
        } catch (error) {
            console.error('Error: ', error);
        }
    };

    return (
        <div>
            <h2 className="text-center text-4xl">Aeropuertos nacionales</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 shadow-sm sm:w-full bg-background hover:shadow-lg transition p-5 mt-5 bg-slate-300 rounded">
                {/* Renderiza un CardAirport por cada aeropuerto */}
                {airports.map((airport) => (
                    <CardAirport key={airport.id} airport={airport} />
                ))}
            </div>
        </div>
    );
}
