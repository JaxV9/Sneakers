import { useSelector } from "react-redux";
import { CartList } from "./components/CartList"
import { CartMetadata } from "../../stateManagement/cardSlice";

export const Cart  = () => {
   const cart = useSelector((state:CartMetadata)=>state.items);
    return (
        <div className="flex-container w-full flex-vertical">
           <h1>Panier</h1>
           <CartList items={cart}></CartList>
           <div className="flex-container">
            <div className="flex-container flex-vertical">
                <span>Appliquer code de réduction</span>
                <div className="flex-container">
                    <button>Continuer mes achats</button>
                </div>
            </div>
            <div className="flex-container flex-vertical">
                <div className="flex-container space-between"><span>Total</span></div>
                <div className="flex-container space-between"><span>Taxes</span></div>
                <div className="flex-container space-between"><span>TOTAL DE LA COMMANDE</span></div>
                <button className="">Finaliser ma commande</button>
            </div>
           </div>
        </div>
    )
}