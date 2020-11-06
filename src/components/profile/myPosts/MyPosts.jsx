import React from 'react'
import Post from './post/Post'
import mod from './MyPosts.module.css'

const MyPosts = (props) => {

    let posts = [
        { id: 1, message: "Does somebody love me?", likesCount: 16 },
        { id: 2, message: "It's my first post", likesCount: 7 }
    ]

    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> )

    return (
        <div>
            
            <h2>Posts</h2>

            {postsElements}

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