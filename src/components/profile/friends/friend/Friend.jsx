import React from 'react'
import { NavLink } from 'react-router-dom';
import ava from './ava.jpg'
import mod from './../Friends.module.css'

const Friend = (props) => {
    let path = "id" + props.id;

    return (
        <div className={mod.friend}>
            <img className={mod.ava} src={ava} />

            
            <div>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    );
}

export default Friend;