// CardAirport.tsx
"use client";
// React
import { FC } from "react";

// Iconos
import { Building2, TowerControl } from "lucide-react";

// Definir un tipo para los datos de los aeropuertos
interface Airport {
    id: string;
    city: string;
    name: string;
    country: string;
    iata: string;
}

// Definir las props del componente
interface CardAirportProps {
    airport: Airport;
}

export const CardAirport: FC<CardAirportProps> = ({ airport }) => {
    return (
        <div className="mt-4 p-2 bg-background shadow-lg border-8 rounded">
            <h2 className="text-center font-bold uppercase">{airport.name}</h2>
            <div className="mt-7 flex items-center justify-center">
                <Building2 className="text-gray-500" strokeWidth={1} />
                <p className="text-gray-600 text-sm font-bold">{airport.city}</p>
            </div>
            <div className="mt-6 flex flex-col items-center justify-center">
                <TowerControl className="text-gray-500" strokeWidth={2} />
                <p className="text-gray-600 text-sm font-bold">{airport.name}</p>
                <small className="mt-2 text-gray-600 text-sm font-bold">Code: {airport.iata}</small>
            </div>
        </div>
    );
};
