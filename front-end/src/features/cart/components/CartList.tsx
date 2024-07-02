import { CartItem } from "../../../stateManagement/cardSlice"
import { ItemCard } from "./ItemCard"

interface CartListProps {
    items: CartItem[];
}

export const CartList  = (cart:CartListProps) => {
    return (
        <div className="flex-container flex-vertical w-full space-evenly">
            <div className="flex-container w-full space-evenly">
                <span className="card-title">Articles ajoutés</span>
                <div className="flex-container">
                    <span className="card-title">Prix unitaire</span>
                    <span className="card-title">Quantité</span>
                    <span className="card-title">Total</span>
                </div>
            </div>
            <div className="flex-container flex-vertical w-full">
                {cart.items.map((item) => (
                    <ItemCard 
                        quantity={item.numberInCart}
                        key={item.shoe.id} 
                        shoe={item.shoe}                 
                    />))}
            </div>
        </div>
    )
}