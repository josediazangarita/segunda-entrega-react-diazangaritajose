import { ItemCounter } from "../ItemCounter/ItemCounter"

export const ItemDetail = (name, imageUrl, description, price, stock) => {
    const onAdd = (cantidad) => {
        console.log(`La cantidad seleccionada es: ${cantidad}`)
        //Se agregará funcionalidad para agregar al carrito
    }

    return (
        <div classeName="row">
            <div className="col-12 text-center mt-5">
                <h1>Detalle del producto</h1>
            </div>
            <div className="col-6 text-center mt-5">
                <img src={imageUrl} alt={name} className="img-fluid" />
                <h2>{product.name}</h2>
            </div>

            <div className="col-6 text-center mt-5">
                <h4>Descripción: {description}</h4>
                <h4>Precio: {price}</h4>
                <h4>Stock: {stock}</h4>
                <ItemCounter onAdd={onAdd} initial={1} stock={100} />
            </div>
        </div>
    )
}
