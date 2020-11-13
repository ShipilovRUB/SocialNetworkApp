import React from 'react'
import MyPosts from './myPosts/MyPosts'
import mod from './Profile.module.css'
import MyPhotos from './myPhotos/MyPhotos'
import Avatar from './avatar/Avatar'
import Friends from './friends/Friends'


const Profile = (props) => {

    return (
        <div className={mod.profile}>
            <div className={mod.firstColomn}>
                <div>
                    <Avatar />
                </div>

                <div>
                    <Friends friends={props.state.friends} />
                </div>
            </div>

            <div className={mod.secondColomn}>
                <div>
                    <MyPhotos />
                </div>

                <div>
                    <MyPosts posts={props.state.posts} addPost={props.addPost} />
                </div>
            </div>
        </div>

    );
}

export default Profile;