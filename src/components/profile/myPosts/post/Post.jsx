import React from 'react'
import ava from './ava.jpg'
import mod from './Post.module.css'

const Post = (props) => {
    return (
        <div className={mod.post}>
            <img className={mod.ava} src={ava} />
            {props.message}
            <div>
                <span>{props.likesCount} likes</span>
            </div>
        </div>
    );
}

export default Post;