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
    },
}

const llavesDelObj = Object.keys(cliente)

console.log(llavesDelObj)

if (!llavesDelObj.includes("direccion")) {
    console.log("Error. Es necesario tener una direccion")
}