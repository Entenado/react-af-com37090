import Item from "../item/item";

const ItemList = ({productsList}) => {
    console.log(productsList)
    return (
        <>
        
            {productsList.map(producto => <Item key={producto.id} prod = {producto}/>)}
        </>
    );
}

export default ItemList;