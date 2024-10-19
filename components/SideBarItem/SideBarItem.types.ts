// Aqui estoy definiendo los tipos de datos de los items del sidebar

// iconos
import { LucideIcon } from "lucide-react";

export type SideBarItemProps = {
    item: {
        label: string,
        icon: LucideIcon,
        href: string
    },
    key: string
}