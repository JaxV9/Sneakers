import { useNavigate } from 'react-router-dom';
import logo from '../../assets/veja.svg';

export const Header  = () => {
    const navigate = useNavigate()
    return (
        <div className="flex-container space-between w-full page-header p-4">
            <div className="flex-container">
                <img src={logo} alt="Veja" className="logo" onClick={()=>navigate("/home")}>  
                </img>
                <span className='header-title'>Homme</span>
                <span className='header-title'>Femme</span>
                <span className='header-title'>Enfant</span>
                <span className='header-title'>Lookbook</span>
                <span className='header-title'>Projet</span>
                <span className='header-title'>Vegan</span>
                <span className='header-title'>Soldes</span>
            </div>
            <div className="flex-container">
                <div className="flex-container">
                    <div className="sub-title">Mon compte</div>
                    <div className="svg">Cart</div>
                </div>
            </div>
        </div>
    )
}

