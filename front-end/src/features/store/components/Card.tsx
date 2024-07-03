import { useDispatch } from 'react-redux';
import { ShoeMetadata, addToCart } from '../../../stateManagement/cardSlice';

type CardPropsType = {
    shoeProps: ShoeMetadata
}

export const Card = ({shoeProps}: CardPropsType) => {
    // const navigate = useNavigate()
    const dispatch = useDispatch()
    
    return (
        <div className="card-container">
            <div className="flex-container">
                <div className="flex-container flex-vertical">
                    <img src={shoeProps.pictures_product && shoeProps.pictures_product[0]?.path } alt="shoe" className="cardImage"/>
                    <div className="cardContentContainer">
                        <span className="card-title">{shoeProps.name}</span><br/>
                        <span className="card-price">{shoeProps.price} €</span>
                        <button onClick={()=>dispatch(addToCart(shoeProps))}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}