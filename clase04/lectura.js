const datos = require("./cliente.json")

console.log(datos)
console.log(typeof datos)

//JSON.stringify() JSON.parse()

const datosString = JSON.stringify(datos)

console.log(datosString)
console.group(typeof datosString)

const datosObj = JSON.parse(datosString)
//localStorage
console.log(datosObj)
console.log(typeof datosObj)