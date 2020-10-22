import React from 'react'
import Post from './post/Post'
import mod from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
            
            <h2>Posts</h2>

            <Post message='Does somebody love me?' likesCount='16' />
            <Post message="It's my first post" likesCount='7' />

            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </div>
    );
}

export default MyPosts;