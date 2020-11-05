import React from 'react'
import { NavLink } from 'react-router-dom'
import mod from './Dialogs.module.css'

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={mod.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={mod.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={mod.dialogs}>

            <div className={mod.dialogsItems}>
                <DialogsItem name="Dimych" id="1" />
                <DialogsItem name="Kristina" id="2" />
                <DialogsItem name="Sava" id="3" />
            </div>

            <div className={mod.messages}>
                <Message message="Hi" />
                <Message message="What is your name?" />
                <Message message="Yo" />
            </div>
            
        </div>
    );
}

export default Dialogs;