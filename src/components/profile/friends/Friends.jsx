import React from 'react'
import { NavLink } from 'react-router-dom'
import ava from './ava.jpg'
import Friend from './friend/Friend'
import mod from './Friends.module.css'

const Friends = (props) => {

    let friendsElement = props.friends.map ( f => <Friend id={f.id} name={f.name} /> )

    return (
        <div>
            <h3>Friends</h3>
            
            <div className={mod.friends}>
                {friendsElement}
            </div>
        </div>
    );
}

export default Friends;