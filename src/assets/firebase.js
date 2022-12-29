
import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, deleteDoc} from "firebase/firestore"



const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react37090af.firebaseapp.com",
  projectId: "react37090af",
  storageBucket: "react37090af.appspot.com",
  messagingSenderId: "202375676933",
  appId: "1:202375676933:web:566e0d286fda0ae520486c"
};

 //Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore() 

const cargarBDD = async () => {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (prod) => {
      await addDoc(collection(db, "productos"), {
          idCategoria: prod.idCategoria,  
          nombre: prod.nombre,
          stock: prod.stock,
          precio: prod.precio,
          img: prod.img
      })
  })
}



const getProductos = async() => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(prod => {return {...prod.data(), id: prod.id}})
  return items
}

const getProducto = async (id) => {
  const prod = await getDoc(doc(db, "productos",id))
  let item
  if(prod.data()) {
      item = {...prod.data(), id: prod.id}
  } else {
      item = "Producto no encontrado"
  }
  
  return item
}



const createProducto = async (objProducto) => {
  const estado = await addDoc(collection(db, "productos"), {
      nombre: objProducto.nombre,
      idCategoria: objProducto.idCategoria,
      stock: objProducto.stock,
      precio: objProducto.precio,
      img: objProducto.img
  })

  return estado
}

const updateProducto = async(id, info) => {
  const estado = await updateDoc(doc(db, "productos",id), info)
  return estado
}

const deleteProducto = async(id) => {
  const estado = await deleteDoc(doc(db,"productos", id))
  return estado
}


//CREATE AND READ ORDENES DE COMPRA

const createOrdenCompra = async (cliente, preTotal, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
      nombre: cliente.nombre,
      apellido: cliente.apellido,
      email: cliente.email,
      dni: cliente.dni,
      direccion: cliente.direccion,
      fecha: fecha,
      precioTotal: preTotal
  })

  return ordenCompra
}

const getOrdenCompra = async(id) => {
  const item = await getDoc(doc(db, "ordenCompra", id))
  const ordenCompra = {...item.data(), id: item.id}
  return ordenCompra
}


export {cargarBDD, getProductos, getProducto, createProducto, updateProducto, deleteProducto, createOrdenCompra, getOrdenCompra}

 