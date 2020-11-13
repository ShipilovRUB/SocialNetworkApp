import React from 'react'
import mod from'./MyPhotos.module.css'
import img1 from './web.jpg'

const MyPhotos = () => {
    return (
        <div>

            <h3>Photos</h3>

            <div>
                <img className={mod.img1} src={img1} />
            </div>

        </div>
    );
}

export default MyPhotos;