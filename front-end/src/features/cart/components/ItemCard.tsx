import { ShoeMetadata, removeFromCart } from "../../../stateManagement/cardSlice"



interface ItemCardProps {
    shoe: ShoeMetadata;
    quantity: number;
}

export const ItemCard  = ({shoe,quantity}:ItemCardProps) => {
    return (
        <div className="flex-container item-card">
           <button onClick={() => {removeFromCart}}>X</button>
           {shoe.pictures_product?
           <img src={shoe.pictures_product} alt={shoe.name} />
           :
           ""}
           <span>{shoe.name}</span>
            <span>{shoe.price}€</span>
            <span>{quantity}</span>
            <span>{shoe.price * quantity}€</span>
        </div>
    )
}