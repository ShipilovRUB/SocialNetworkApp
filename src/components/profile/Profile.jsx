import React from 'react'
import MyPosts from './myPosts/MyPosts'
import mod from'./Profile.module.css'
import img1 from './web.jpg'

const Profile = () => {
    return (
        <div>
            <div>
                <img className={mod.img1} src={img1} />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;