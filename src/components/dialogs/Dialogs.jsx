import React from 'react'
import Author from './author/Author'
import mod from './Dialogs.module.css'
import Message from './message/Message'

const Dialogs = (props) => {

    let authorElements = props.state.authors.map(d => <Author name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.text} id={m.id} />);

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={mod.dialogs}>

            <div className={mod.authors}>
                {authorElements}
            </div>

            <div className={mod.messages}>
                {messagesElements}
            </div>

            <div className={mod.sendMessageForm}>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>

                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>


        </div>
    );
}

export default Dialogs;