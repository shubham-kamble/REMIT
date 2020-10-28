import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiPayMoney } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Button } from './Button'
import { IconContext } from 'react-icons/lib'
import './Navbar.css'

function Navbar() {

    const [menu, setMenu] = useState(false)
    const [button, setButton] = useState(true)

    const handleMenu = ()=> setMenu(!menu)
    const closeMenu = ()=> setMenu(false)

    const showButton = ()=>{
        if(window.innerWidth < 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    window.addEventListener('resize',showButton)

    return (
        <IconContext.Provider value={{color:'#fff'}}>
        <div className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className='navbar-logo'>
                    <GiPayMoney className='navbar-icon' />
                    REMIT
                </Link>
                <div className='menu-icon' onClick={ handleMenu }>
                    { menu ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={ menu ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link' onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-link' onClick={closeMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-link' onClick={closeMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-btn'>
                        { button ? (
                            <Link to='/signup' className='btn-link'>
                                <Button buttonStyle='btn-outline' >Sign Up</Button>
                            </Link>
                        ):(
                            <Link to='/signup' className='btn-link' onClick={closeMenu}>
                                <Button buttonStyle='btn-outline' buttonSize='btn-mobile'>Sign Up</Button>
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Navbar
