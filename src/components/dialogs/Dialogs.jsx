import React from 'react'
import DialogsItem from './dialogsItem/DialogsItem'
import mod from './Dialogs.module.css'
import Message from './message/Message'

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( d => <DialogsItem name={d.name} id={d.id} /> );
    let messagesElements = props.messages.map( m => <Message message={m.text} id={m.id} /> );

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