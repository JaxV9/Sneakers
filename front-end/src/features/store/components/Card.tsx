import { ShoesType } from '../../../model/shoes';

type CardPropsType = {
    shoeProps: ShoesType
}

export const Card = ({shoeProps}: CardPropsType) => {
    // const navigate = useNavigate()
    
    return (
        <div className="card-container">
            <div className="flex-container">
                <div className="flex-container flex-vertical">
                    <img src={shoeProps.pictures_product[0].path } alt="shoe" className="cardImage"/>
                    <div className="cardContentContainer">
                        <span className="card-title">{shoeProps.name}</span><br/>
                        <span className="card-price">{shoeProps.price} €</span>
                    </div>
                </div>
            </div>
        </div>
    )
}