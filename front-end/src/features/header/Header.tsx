import { useNavigate } from 'react-router-dom';
import logo from '../../assets/veja.svg';

export const Header  = () => {
    const navigate = useNavigate()
    return (
        <div className="flex-container space-between w-full page-header bb-black">
            <div className="flex-container px-4">
                <img src={logo} alt="Veja" className="logo" onClick={()=>navigate("/home")}/>  
                <div className="flex-container px-4">
                    <span className='header-title px-2'>Homme</span>
                    <span className='header-title px-2'>Femme</span>
                    <span className='header-title px-2'>Enfant</span>
                    <span className='header-title px-2'>Lookbook</span>
                    <span className='header-title px-2'>Projet</span>
                    <span className='header-title px-2'>Vegan</span>
                    <span className='header-title px-2'>Soldes</span>
                </div>
            </div>
            <div className="flex-container px-4">
                <div className="flex-container">
                    <span className="header-title">Mon compte</span>
                    <span className="svg px-2">Cart</span>
                </div>
            </div>
        </div>
    )
}

