import {useState} from 'react';
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillCartPlusFill} from "react-icons/bs";

const ItemCount = ({stock, onAdd}) => {
    const[contador, setContador] = useState(1) // Valor inicial

    const agregarAlCarrito = () => {
        onAdd(contador)
    }

    const incrementar = () => contador < stock && setContador(contador + 1)

    const decrementar = () => contador > 1 && setContador(contador - 1)
    
    return (
        <>
            <button onClick={decrementar} className='btn btn-light botItem'><i class="fas fa-minus"></i><BsFillCaretLeftFill/></button>
                    {contador}
            <button onClick={incrementar} className='btn btn-light botItem'><i class="fas fa-plus"></i><BsFillCaretRightFill/></button>
            <br />
            <button className="btn btn-dark" onClick={agregarAlCarrito}><i class="fas fa-cart-plus"></i><BsFillCartPlusFill/> Agregar al carrito</button>
            <br />
            
        </>
    );
}

export default ItemCount;
