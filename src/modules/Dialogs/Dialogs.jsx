import React from "react";
import style from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Dialog from "./Dialog/Dialog";




const Dialogs = (props) => {    
    const dialogRender = props.state.dialog.map(el => <Dialog dialog={el}/>)
    
    const dialogUserRender = 
        props.state.dialogsUser.map(
            el => <li className={style.item}><NavLink to={`/dialogs/id${el.id}`}>{`${el.name}`}</NavLink></li>)

    return (
        <section className={style.dialogs}>
            <ul className={style.users}>
                { dialogUserRender }
            </ul>         
            <div className={style.dialog}>
               { dialogRender }               
            </div>
        </section>
    )
}

export default Dialogs;