// Aqui estoy renderizando un componente Table para ver el listado
// y filtrar por lugar

// Fonts
import { Ubuntu } from 'next/font/google';


// Componentes
// import { HeaderFlights } from "./components/HeaderFlights";
import { ListFlights } from "./components/ListFlights";


const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400'] });


export default function PageFlights() {
    return(
        <div>
            {/* <HeaderFlights /> */}
            <h2 className={`text-center font-black ${ubuntu.className} text-4xl`}>Vuelos principales</h2>
            {/* Componente TABLE de la lista de los vuelos */}
            <ListFlights />
        </div>
    )
}