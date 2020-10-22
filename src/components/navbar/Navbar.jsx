import React from 'react'
import { NavLink } from 'react-router-dom';
import mod from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={mod.nav}>
            <div className={mod.item}>
                <NavLink to="/profile" activeClassName={mod.active}>
                    <div className={mod.link}>Profile</div>
                </NavLink>
            </div>
            <div className={`${mod.item}`}>
                <NavLink to="/dialogs" activeClassName={mod.active}>
                    <div className={mod.link}>Messages</div>
                </NavLink>
            </div>
            <div className={mod.item}>
                <NavLink to="/news" activeClassName={mod.active}>
                    <div className={mod.link}>News</div>
                </NavLink>
            </div>
            <div className={mod.item}>
                <NavLink to="/music" activeClassName={mod.active}>
                    <div className={mod.link}>Music</div>
                </NavLink>
            </div>
            <div className={mod.item}>
                <NavLink to="/settings" activeClassName={mod.active}>
                    <div className={mod.link}>Settings</div>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;