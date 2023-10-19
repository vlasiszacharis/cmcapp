import React from 'react'
import logo from './logo.png'
import {Link} from 'react-router-dom'
import Button from '../Button/Button'
import Input from '../Input/Input'
import '../Navbar/Navbar.css'
import ToggleMenu from '../ToggleMenu/ToggleMenu'
import {useState} from 'react'

function Navbar(){
const [toggle,setToggle] = useState("off")

const handleMouseOver = () =>{
    setToggle("on")
}

const handleMouseOut = ()=>{
    setToggle("off")
}

    return(
            <>
                <div className="NavBar__MainWrapper">
                    <div className="NavBar__LogoWrapper">
                        <Link to="/"><img src={logo} alt='logo'/></Link>
                    </div>
                    <div className="NavBar__LinksWrapper">
                        <Link to="/"  ><span onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut}>Cryptocurrencies</span>{toggle==="on"?<ToggleMenu />:null}</Link>
                        <Link to="/">Exchanges</Link>
                        <Link to="community">Community</Link>
                        <Link to="/">Learn</Link>
                        <Link to="/">Products</Link>

                    </div>
                    <div className="NavBar__SearchWrapper">
                        <Link to="watchlist"><Button props="Watchlist"/></Link>
                        <Link to="portfolio"><Button props="Portfolio"/></Link>

                    </div>
                    <div className="NavBar__MenuWrapper">
                        <Input />

                    </div>

                </div>
            
            
            </>
    )
}

export default Navbar;