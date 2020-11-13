import React from 'react'
import ava from './ava.jpg'
import mod from './Avatar.module.css'

const Avatar = (props) => {
    return (
        <div>
            <div>
                <img className={mod.ava} src={ava} />
            </div>
        </div>
    );
}

export default Avatar;