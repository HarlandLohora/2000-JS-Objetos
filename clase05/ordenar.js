const clientes = require("./clientes.json")

function ordenar(lista, propiedad) {
    return lista.sort((a, b) => {
        if (a[propiedad] < b[propiedad]) {
            return -1
        }

        if (a[propiedad] > b[propiedad]) {
            return 1
        }

        return 0
    })
}

const resultado = ordenar(clientes, "nombre")

console.log(resultado)