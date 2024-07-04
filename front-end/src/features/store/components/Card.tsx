import { useDispatch } from 'react-redux';
import { ShoeMetadata, addToCart } from '../../../stateManagement/cardSlice';

type CardPropsType = {
    shoeProps: ShoeMetadata
}


export const Card = ({ shoeProps }: CardPropsType) => {
    // const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className="card-container">
                <div className='cardImage' style={{backgroundImage: `url(${shoeProps.pictures_product[0].path})`}}></div>
                <div className="cardContentContainer">
                    <span className="card-title">{shoeProps.name}</span><br />
                    <span className="card-price">{shoeProps.price} €</span><br />
                    <button className='addProductBtn' onClick={() => dispatch(addToCart(shoeProps))}>Ajouter</button>
                </div>
        </div>
    )
}