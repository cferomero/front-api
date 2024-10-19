// Renderizando las columnas de la tabla

"use client"

import { Star } from "lucide-react";

// librerias UI SHADCN
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

export type FlightsTable = {
    id: string,
    aerolineaName: string,
    ciudadSalida: string,
    ciudadDestino: string
    fechaDespegue: string,
    aeropuerto: string,
}

export const columns: ColumnDef<FlightsTable>[] = [
    {
        accessorKey: "aerolineaName",
        header: "Nombre Aerolinea"
    },
    {
        accessorKey: "ciudadSalida",
        header: "Ciudad de salida"
    },
    {
        accessorKey: "ciudadDestino",
        header: "Ciudad de destino"
    },
    {
        accessorKey: "fechaDespegue",
        header: "Fecha"
    },
    {
        accessorKey: "aeropuerto",
        header: "Aeropuerto"
    },
    {
        id: "actions",
        header: "Acciones",
        cell: () => {
            return(
                <Button>
                    <Star strokeWidth={1} />
                    Reservar
                </Button>
            )
        }
    }
]
