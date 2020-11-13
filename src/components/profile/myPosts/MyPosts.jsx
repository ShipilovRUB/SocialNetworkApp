import React from 'react'
import Post from './post/Post'
import mod from './MyPosts.module.css'

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> )

    return (
        <div>
            
            <h3>Posts</h3>

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