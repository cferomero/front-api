"use client"
// Componentes
import { SideBarItem } from '../SideBarItem';
import {dataMainSidebar} from './SideBarRoutes.data';

export function SideBarRoutes() {
    return (
        // Componente para mostrar en el navegador las rutas del sidebar
        <div className="flex flex-col justify-between h-full">
            <div>
                <div className="p-2 md:p-6">
                    {/* Aqui mapeo los nombres de las rutas y las rutas */}
                    <p>HOME</p>
                    {dataMainSidebar.map((route) => (
                        <SideBarItem key={route.label} item={route}/>
                    ))}
                </div>
            </div>
        </div>
    )
}