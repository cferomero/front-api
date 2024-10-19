// CardFly es te componente se van a renderizar toda la informacion principal de un vuelo

// React
import { FC } from "react";

//iconos
import { MoveRight, Calendar, Building2, TowerControl } from "lucide-react";


// Estoy definiendo el tipo de datos para los vuelos
interface Flyght {
    id: string;
    ciudadSalida: string;
    ciudadDestino: string;
    fechaVuelo: string;
    horaSalida: string;
    ciudad: string;
    aeropuerto: string;
}

interface CardFlyghtsProps {
    flyght: Flyght;
}

export const CardFly: FC<CardFlyghtsProps> = ({flyght}) => {
    return(
        <div className="items-center mt-5 bg-background shadow-lg border-8">
            <div>
                <p className="text-center mt-2 font-bold">Vuelo nacional</p>
                <div className="flex mt-4 p-2 justify-evenly">
                    <p className="text-gray-600 text-sm font-bold">
                        {flyght.ciudadSalida}
                    </p>
                    <MoveRight className="text-gray-500" strokeWidth={1}/>
                    <p className="text-gray-600 text-sm font-bold">
                        {flyght.ciudadDestino}
                    </p>
                </div>
                <div className="mt-4 p-2">
                    <div className="flex items-center justify-center">
                        <Calendar className="text-gray-500" strokeWidth={1} />
                        <p className="text-gray-600 text-sm font-bold">
                            {flyght.fechaVuelo} - {flyght.horaSalida}
                        </p>
                    </div>
                    <div className="mt-4 flex items-center justify-center">
                        <Building2 className="text-gray-500" strokeWidth={1} />
                        <p className="text-gray-600 text-sm font-bold">
                            {flyght.ciudad}
                        </p>
                    </div>
                    <div className="mt-4 flex items-center justify-center">
                        <TowerControl className="text-gray-500" strokeWidth={1} />
                        <p className="text-gray-600 text-sm font-bold">
                            {flyght.aeropuerto}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}