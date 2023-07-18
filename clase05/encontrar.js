const clientes = require("./clientes.json")

function encontrar(lista, llave, valor) {
    return lista.find((cliente) => cliente[llave].includes(valor))
}

const resultado = encontrar(clientes, "email", "monica@gmail.com")

console.log(resultado)