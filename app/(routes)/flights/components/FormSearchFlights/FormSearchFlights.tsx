// Componente para renderizar el formulario de búsqueda de vuelos

"use client";

// Componentes
import { useForm } from "react-hook-form";
import axios from "axios";

// Librerías UI SHADCN
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Valores de cada campo definidos
const formSchema = z.object({
    salida: z.string().min(2, {
        message: "¡El nombre de la ciudad es muy corto!",
    }),
    destino: z.string().min(2, {
        message: "¡El nombre de la ciudad es muy corto!",
    }),
});

// Inferir el tipo de datos a partir del esquema
type FormData = z.infer<typeof formSchema>;

export function FormSearchFlights() {
    // Valores iniciales del formulario
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            salida: "",
            destino: "",
        },
    });

    // Valido si los campos fueron completados
    // si los campos son correctos
    const { isValid } = form.formState;

    
    // Funcion para el onclick del formualrio
    const onSubmit = async (data: FormData) => {
        try {
            const response = await axios.get("http://localhost:8000/flyghts/search", {
                params: {
                    salida: data.salida,
                    destino: data.destino,
                },
            });
            console.log("Resultados filtrados:", response.data);
        } catch (error) {
            console.error("Error al filtrar vuelos:", error);
        }
    };

    return (
        // Renderizamos el formulario para mostrarlo en el navegador
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-3">
                        {/* Input de la salida */}
                        <FormField
                            control={form.control}
                            name="salida"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ciudad de salida</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Santa Marta" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Input del destino */}
                        <FormField
                            control={form.control}
                            name="destino"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ciudad de destino</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Santa Marta" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    {/* Botón de envío del formulario */}
                    <Button className="mt-4" type="submit" disabled={!isValid}>
                        Filtrar
                    </Button>
                </form>
            </Form>
        </div>
    );
}
