# Prueba técnica - Full stack
### Funcionalidades especificas
Un programa desarrollado en Laravel y React, que permita ver los vuelos disponibles.
Que permita al usuario filtrar vuelos por ciudad de salida y ciudad de destino.
Que permita al usuario reservar vuelos, segun los filtros aplicados anteriormente

### Arquitectura del software
Software constituido por dos módulos. Un módulo Fronted desarrollado en React con Typescript y un módulo Backend desarrollado con php Laravel artisan. Junto a una base de datos mysql.
Para el módulo Fronted, se utilizó librerías de componentes UI como ShadCn y TanqStack; También se implementó framework de Css como Tailwind, axios para realizar las peticiones y Eslint como parte de las purebas de clean code.
El backend con Laravel se ejecutó en el puerto http://localhost:8000 y el Fronted React en el http://localhost:3000.

#### Api Laravel
El modelo de arquitectura del Backend fue con el model, controller y migrations, donde exportaron las tablas para la base de datos.
Se creo una Api donde retornará todos los registros de cada tabla en la base de datos y se crearon las rutas de la Api, en el Controller.
La Api se probó con postman y thunderClient para verificar su funcionalidad.

#### React Ts
Para la interfaz de usuario se manejaron distintos tipos de componentes, componentes generales como
NavBar, SideBar, SideBarRoutes, SideBarItem, estos componentes en la raiz (/components/) son los componentes que el programa va a tener en todas las vistas.
Dentro del Menú Sidebar se ralizaron algunas opciones con rutas, Home, Airports, Flyghts y Reserves. Estas rutas están configuradas en el componente SideBarRoutes/SideBarRoutes.data.ts.
Dentro del módulo /app/(routes)/, Se encuentran las rutas y los pages.tsx y los componentes que dirigen a las vistas de las rutas.
* /app/page.tsx - La vista inicial donde se muestran los vuelos iniciales
* /app/(routes)/airports/ - La vista donde cargan los aeropueros registrados en la base de datos
* /app/(routes)/flyghts/ - La vista donde carga un componente Table donde cargan los vuelos registrados en la base de datos y un mini formulario donde el usuario pueda filtrar por ciudad de salida y ciudad de destino.
* /app/(routes)/reserves/ - La vista donde la persona verá las reservas que ha realizado.

Para el módulo fonrted, se utilizaron interfaces para especificaar cada datos de cada elemento que el componentes retorna para la interaccion del usuario.
Uso de Hooks como useEffect, useState o useForm para la interaccion con los elementos de cada componente.
