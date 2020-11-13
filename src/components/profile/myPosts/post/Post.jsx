import React from 'react'
import ava from './ava.jpg'
import mod from './Post.module.css'

const Post = (props) => {
    return (
        <div className={mod.post}>
            <div className={mod.avaDiv}>
                <img className={mod.ava} src={ava} />
            </div>

            <div>
                <div className={mod.author}>
                    Artem Shipilov
                </div>

                <div className={mod.message}>
                    {props.message}
                </div>
            </div>


            <div className={mod.likes}>
                <span>{props.likesCount} likes</span>
            </div>
        </div>
    );
}

export default Post;