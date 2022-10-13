## Comandos

Sí usted va a usar Docker, utilice el siguiente comando:

> docker-compose up

Y esto le instalará y le cargará todo lo necesario para abrir un servidor
web en el puerto 3000.

> npm run init

Inserta datos iniciales en las tablas.

> npm run start:dev

Inicializa la aplicación con nodemoon

> npm run start

Inicializa la applicación con node

## Endpoints

```
get /users     | Devuelve todos los usuarios
get /users/:ID | Devuelve un usuario
post /users    | Crea un nuevo usuario
    first_name: string
    last_name: string
    age: string
```

```
get /rooms | Devuelve todas las habitaciones
get /rooms/availables | Devuelve las habitaciones disponibles
get /rooms/:ID | Devuelve una habitación
patch /rooms/:ID/reserve | Permite a un usuario reservar una habitación
    user_id: number
    days: number

patch /rooms/:ID/pay | Le permite a un usuario pagar la habitación
    user_id: number
    payment: number
    method: number

patch /rooms/:ID/free | Le permite a un usuario liberar una habitación
```

```
get /transactions | Retorna todas las transacciones
get /transactions/:ID | Retorna una transacción
```

```
get /reservations | Retorna todas las reservas registradas
get /reservations/:ID | Retorna una reserva
get /reservations/pending | Retorna las reservaciones pendientes
get /reservations/paidout | Retorna las reservaciones pagadas
get /reservations/deleted | Retorna las reservaciones eliminadas
```

## Justificación

```
Los endpoints cubren las necesidades elementales para la reserva,
pago y liberación de habitaciones de hotel.

También permiten revisar las reservas registradas, sus estados, los pagos y las habitaciones
tanto disponibles cómo no.
```