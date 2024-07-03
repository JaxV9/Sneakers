// import { useNavigate } from "react-router"
import shoepic from '../../../assets/vejamock.jpg';


export const Card = () => {
    // const navigate = useNavigate()
    
    return (
        <div className="card-container"
        //  onClick={()=>navigate(`../store/${shoe.id}`)}
         >
            <div className="flex-container">
                <div className="flex-container flex-vertical">
                    <img src={shoepic} alt="shoe" className="cardImage"/>
                    <div className="cardContentContainer">
                        <span className="card-title">Chaussure</span><br/>
                        <span className="card-price">150 e</span>
                    </div>
                </div>
            </div>
        </div>
    )
}