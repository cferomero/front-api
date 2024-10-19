// Componentes
import { SideBarRoutes } from "../SideBarRoutes";

export function SideBar() {
    return (
        <div className="h-screen">
            {/* Renderizando en el navegador las rutas */}
            <div className="h-full flex flex-col border-r">
                <h6 className="ml-5 mt-5">App Flyes</h6>
                <SideBarRoutes />
            </div>
        </div>
    )
}