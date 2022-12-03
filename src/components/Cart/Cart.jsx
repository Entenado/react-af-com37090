import { useContext } from "react";
import { CartContext } from "../../context/CartContext"; 
import { Link } from "react-router-dom";
const Cart = () => {
    const {cart, emptyCart, totalPrice, removeItem} = useContext(CartContext)

    return (
        <>
           
            {cart.length === 0 ? 
            <div>
                <p className="carritovacio">Tu carrito está vacío</p>
                <br />
                <Link to={'/'}><button className="inicio">Ir al inicio</button></Link>
            </div> 
            : 
            <div className="prueba1">
                {cart.map((prod,indice) =><div className="card mb-3" key={indice} style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="nombre">{prod.nombre}</h5>
                            <p className="cantidad">Cantidad: {prod.cant}</p>
                            <p className="preciou">Precio unitario: {prod.precio}</p>
                            <p className="subtotal">Subtotal: {prod.precio * prod.cant}</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            )}
            <div>
                <p>Total: $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                <button className="btn btn-danger" onClick={emptyCart}>Limpiar Carrito</button>
                <Link to="/checkout">
                    <button className="btn btn-primary">Finalizar Compra</button>
                </Link>
            </div>
            </div>
            }
        </>
        
    );
}

export default Cart;