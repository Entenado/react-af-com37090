import {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import { getProducto } from '../../assets/firebase.js';
import { consultarBDD } from '../../assets/funciones';

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    
    useEffect(() => {
        getProducto(id).then(prod => {
           /* consultarBDD('../json/productos.json').then(productos =>{
                const prod = productos.find(productoArray => productoArray.id === parseInt(id))*/
            
                setProducto(prod)
        })
    }, []);

    return (
        <div>
            <div className= "card mb-3 container itemDetail">
            
                <ItemDetail producto={producto}/>
            </div>
        </div>
    );
}

export default ItemDetailContainer;