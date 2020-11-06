import React from 'react'
import DialogsItem from './dialogsItem/DialogsItem'
import mod from './Dialogs.module.css'
import Message from './message/Message'

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Kristina" },
        { id: 3, name: "Sava" }
    ]

    let dialogsElements = dialogs.map( d => <DialogsItem name={d.name} id={d.id} /> );

    let messages = [
        { id: 1, text: "Hi" },
        { id: 2, text: "What is your name?" },
        { id: 3, text: "Yo" }
    ]

    let messagesElements = messages.map( m => <Message message={m.text} id={m.id} /> );

    return (
        <div className={mod.dialogs}>

            <div className={mod.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={mod.messages}>
                {messagesElements}
            </div>
            
        </div>
    );
}

export default Dialogs;