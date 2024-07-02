import { useSelector } from 'react-redux';
import { CartList } from './components/CartList';
import { CartMetadata } from '../../stateManagement/cardSlice';

const TAX_RATE = 0.2; // Example tax rate, adjust as needed

export const Cart = () => {
    const cart = useSelector((state: CartMetadata) => state.items);

    const totalPrice = cart.reduce((total, item) => total + item.shoe.price * item.numberInCart, 0);
    const taxes = totalPrice * TAX_RATE;
    const totalOrder = totalPrice;

    return (
        <div className="flex-container w-full flex-vertical cart">
            <h1>Panier</h1>
            <CartList items={cart} />
            <div className="flex-container space-evenly w-full">
                <div className="flex-container flex-vertical">
                    <span>Appliquer code de réduction</span>
                    <div className="flex-container">
                        <button>Continuer mes achats</button>
                    </div>
                </div>
                <div className="flex-container flex-vertical">
                    <div className="flex-container space-between">
                        <span>Total</span>
                        <span>{totalPrice.toFixed(2)}€</span>
                    </div>
                    <div className="flex-container space-between">
                        <span>Taxes</span>
                        <span>{taxes.toFixed(2)}€</span>
                    </div>
                    <div className="flex-container space-between">
                        <span>TOTAL DE LA COMMANDE</span>
                        <span>{totalOrder.toFixed(2)}€</span>
                    </div>
                    <button>Finaliser ma commande</button>
                </div>
            </div>
        </div>
    );
};
