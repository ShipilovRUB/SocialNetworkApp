import React from 'react'
import mod from'./ProfileInfo.module.css'
import img1 from './web.jpg'

const ProfileInfo = () => {
    return (
        <div>           
            <div>
                <img className={mod.img1} src={img1} />
            </div>

            <div>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;