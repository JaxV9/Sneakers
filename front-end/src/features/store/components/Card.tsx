// import { useNavigate } from "react-router"
import shoepic from '../../../assets/vejamock.jpg';


export const Card = () => {
    // const navigate = useNavigate()
    
    return (
        <div className="flex-container card-container"
        //  onClick={()=>navigate(`../store/${shoe.id}`)}
         >
            <div className="flex-container">
                <div className="flex-container flex-vertical">
                    <img src={shoepic} alt="shoe" className="card-pic"/>
                    <div className="card-content flex-container flex-vertical">
                        <span className="card-title">Chaussure</span>
                        <span className="card-price">Prix</span>
                    </div>
                </div>
            </div>
        </div>
    )
}