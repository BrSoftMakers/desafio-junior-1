import Logo from '../../img/Logo'
import OpcoesHeader from "../OpcoesHeader"
import IconesHeader from "../../img/Icone"
import {Link} from "react-router-dom";

function NavBar() {
    return (
            
        <nav className="bg-#0588D1 justify-center items-center min-h-[720px] h-full">
            <div className='flex flex-col justify-center items-center mt-4'>
                
                <div className='mt-8'>
                <Link to="/">
                <Logo/>
                 </Link>
                <OpcoesHeader/>
                <IconesHeader/>
                </div>
            </div>
        </nav>
        
    )
}

export default NavBar