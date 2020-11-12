import React from 'react'
import MyPosts from './myPosts/MyPosts'
import mod from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {

    return (
        <div>
            <div>
                <ProfileInfo />
            </div>

            <div>
                <MyPosts posts={props.state.posts} />
            </div>
        </div>

    );
}

export default Profile;