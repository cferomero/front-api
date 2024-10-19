// En este componente se esta cargando el header de la ruta
// para generar un formulario para filtrar

"use client"

// React
import { useState } from "react"

// Componentes UI Shadcn
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

//Comonentes
import { FormSearchFlights } from "../FormSearchFlights";

export function HeaderFlights() {
    const [openModal, setOPenModal] = useState(false);

    return(
        <div className="flex justify-between items-center">
            <h3 className="text-2xl">Vuelos</h3>
            {/* Componente donde renderizo un PopUp */}
            <Dialog open={openModal} onOpenChange={setOPenModal}>
                <DialogTrigger asChild>
                    <Button>Buscar vuelo</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-center"> Filtre su vuelo aquí </DialogTitle>
                        <DialogDescription className="text-center">Busque aquí el vuelo que más le convenga.</DialogDescription>
                    </DialogHeader>

                    {/* Componente donde se esta renderizando el formulario */}
                    <FormSearchFlights />
                </DialogContent>
            </Dialog>
        </div>
    )
}