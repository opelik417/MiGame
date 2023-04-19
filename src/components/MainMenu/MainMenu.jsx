import { NavLink } from "react-router-dom"
import './MainMenu.css'

const MainMenu = (props) =>{
    return(
        <div className='containerWrapper'>
            <div className='container'>
                <div className='buttonContainer'>
                    <NavLink to='/game' > Start Game </NavLink>
                </div>
            </div>
        </div>
    )
}

export default MainMenu;