import React from 'react'
import navbarModule from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={navbarModule.nav}>
            <div className={navbarModule.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={`${navbarModule.item} ${navbarModule.active}`}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={navbarModule.item}>
                <a href="/news">News</a>
            </div>
            <div className={navbarModule.item}>
                <a href="/musik">Musik</a>
            </div>
            <div className={navbarModule.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;