import { cargarBDD, getProductos } from "./firebase.js"

export const consultarBDD = async (ruta) => {
    const promise = await fetch(ruta)
    const productos = await promise.json()
    return productos
}
 
cargarBDD () 