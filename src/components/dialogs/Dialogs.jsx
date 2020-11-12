import React from 'react'
import Author from './author/Author'
import mod from './Dialogs.module.css'
import Message from './message/Message'

const Dialogs = (props) => {

    let authorElements = props.state.authors.map( d => <Author name={d.name} id={d.id} /> );
    let messagesElements = props.state.messages.map( m => <Message message={m.text} id={m.id} /> );

    return (
        <div className={mod.dialogs}>

            <div className={mod.authors}>
                {authorElements}
            </div>

            <div className={mod.messages}>
                {messagesElements}
            </div>
            
        </div>
    );
}

export default Dialogs;