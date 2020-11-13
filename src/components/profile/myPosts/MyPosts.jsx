import React from 'react'
import Post from './post/Post'
import mod from './MyPosts.module.css'

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> )

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div>
            
            <h3>Posts</h3>

            {postsElements}

            <div>
                <textarea ref={newPostElement}></textarea>
            </div>

            <div>
                <button onClick={addPost}>Add post</button>
            </div>

        </div>
    );
}

export default MyPosts;