import { useDispatch } from "react-redux";
import { ShoeMetadata, removeFromCart } from "../../../stateManagement/cardSlice"



interface ItemCardProps {
    shoe: ShoeMetadata;
    quantity: number;
}

export const ItemCard  = ({shoe,quantity}:ItemCardProps) => {
    const dispatch = useDispatch()
    return (
        <div className="flex-container item-card w-full flex-horizontal space-evenly">
            <div className="flex-container">
                <button onClick={() => {dispatch(removeFromCart(shoe))}}>X</button>
                {shoe.pictures_product?
                <img src={shoe.pictures_product[0].path} alt={shoe.name} />
                :
                ""}
                <span className="item-card-title">{shoe.name}</span>
           </div>
           <div className="flex-container">
            <span className="item-card-price">{shoe.price}€</span>
            <span>{quantity}</span>
            <span className="item-card-price">{shoe.price * quantity}€</span>
            </div>
        </div>
    )
}