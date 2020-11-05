import React from 'react'
import mod from './Header.module.css'
import logo from './logo.png'

const Header = () => {
    return (
        <header className={mod.header}>
            <img className={mod.logo} src={logo} />
        </header>
    );
}

export default Header;