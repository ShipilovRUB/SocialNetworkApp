import React from 'react'
import headerModule from './Header.module.css'
import logo from './logo.png'

const Header = () => {
    return (
        <header className={headerModule.header}>
            <img className={headerModule.logo} src={logo} />
        </header>
    );
}

export default Header;