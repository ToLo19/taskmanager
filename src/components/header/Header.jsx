import React from 'react'
import './Header.css'
import logo from './pepsi.png'
import Menu from '../menu/Menu'

const Header = () => {
    return(
        <header id='Header'>
            <img src={logo} alt='logo'/>
            <div id='Menu'>
                <Menu name='Home' />
                <Menu name='About us' />
                <Menu name='Our clients' />
                <Menu name='Contact us' />
            </div>
        </header>
    )
}

export default Header 