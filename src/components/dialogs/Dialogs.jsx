import React from 'react'
import { NavLink } from 'react-router-dom'
import mod from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={mod.dialogs}>
            <div className={mod.dialogsItems}>
                <div className={mod.dialog}>
                    <NavLink to="/dialogs/1">Dimych</NavLink>
                </div>
                <div className={mod.dialog + ' ' + mod.active}>
                    <NavLink to="/dialogs/2">Kristina</NavLink>
                </div>
                <div className={mod.dialog}>
                    <NavLink to="/dialogs/3">Sava</NavLink>
                </div>
            </div>
            <div className={mod.messages}>
                <div className={mod.message}>
                    Hi
                </div>
                <div className={mod.message}>
                    What is your name?
                </div>
                <div className={mod.message}>
                    Yo
                </div>
            </div>
        </div>
    );
}

export default Dialogs;