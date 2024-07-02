import { CartItem } from "../../../stateManagement/cardSlice"
import { ItemCard } from "./ItemCard"

interface CartListProps {
    items: CartItem[];
}

export const CartList  = (cart:CartListProps) => {
    return (
        <div className="flex-container flex-vertical">
            {cart.items.map((item) => (
                <ItemCard 
                    quantity={item.numberInCart}
                    key={item.shoe.id} 
                    shoe={item.shoe}                 
                />))}
        </div>
    )
}