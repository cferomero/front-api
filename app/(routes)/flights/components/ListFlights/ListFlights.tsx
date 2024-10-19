// Componente donde estoy retornando el componente Datatable
// Junto a las columnas

import { FlightsTable, columns } from './columns';
import { DataTable } from './data-table';
import axios from 'axios';

async function getData(): Promise<FlightsTable[]> {
    try {
        const response = await axios.get('http://localhost:8000/flyghts');
        return response.data; // Asegúrate de que la respuesta tenga la estructura correcta
    } catch (error) {
        console.error('Error fetching flight data:', error);
        return [];
    }
}

export async function ListFlights() {
    const data = await getData();

    return (
        <div className="container mx-auto py-10">
            <DataTable 
              columns={columns} 
              data={data} 
            />
        </div>
    );
}
