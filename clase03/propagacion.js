const cliente = {
    nombre: "Sofia",
    edad: 31,
    email: "sofia@gmail.com",
    telefonos: ["55 1234 5678", "55 4323 4353"],
    direccion: {
        calle: "Avenida Reforma",
        numero: 222,
        pais: "Mexico",
        apartamento: true
    }
}

function llamarCliente(telefonoUno, telefonoDos) {
    console.log(`Llamando a ${telefonoUno}`)
    console.log(`Llamando a ${telefonoDos}`)
}

llamarCliente(...cliente.telefonos)

//Spread Operator ...

const pedido = {
    cliente: cliente.nombre,
    ...cliente.direccion
}

console.log(pedido)