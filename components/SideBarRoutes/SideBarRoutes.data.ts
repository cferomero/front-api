// Creando objeto para las rutas

// iconos
import { PlaneTakeoff, TowerControl, Search, TicketPlus } from "lucide-react";

export const dataMainSidebar = [
    {
        icon: PlaneTakeoff,
        label: "Home",
        href: "/"
    },
    {
        icon: TowerControl,
        label: "Airports",
        href: "/airports"
    },
    {
        icon: Search,
        label: "Flights",
        href: "/flights"
    },
    {
        icon: TicketPlus,
        label: "Reserves",
        href: "/reserves"
    }
]