// Libreria de componentes SHADCN
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Componentes
import { SideBarRoutes } from "../SideBarRoutes";

// iconos
import { Menu } from "lucide-react";


export function Navbar() {
    return (
        // Componente Navbar
        <nav className="flex items-center px-2 gap-x-4 md:px-6 justify-between w-full bg-background border-b h-20">
            <div className="block xl:hidden">
                {/* Componentes para el SIDEBAR */}
                {/* Cuando el dispositivo sea movil se responsivo */}
                <Sheet>
                    <SheetTrigger className="flex items-center">
                        {/* Icono */}
                        <Menu />
                    </SheetTrigger>
                    <SheetContent side="left">
                        {/* Rutas del Sidebar */}
                        <SideBarRoutes />
                    </SheetContent>
                </Sheet>
            </div>
            <div className="relative w-[300px]">
                {/* Navbar */}
                <h5>App Flys</h5>
            </div>
        </nav>
    )
}