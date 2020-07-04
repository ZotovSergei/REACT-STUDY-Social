import React from 'react';
import style from "./Dialog.module.css";

const Dialog = (props) => {
    return (
        <div className={style.dialog}>
            <ul className={style.message}>
                <li>
                    <div>
                        <span className={style.id}>{props.dialog.id}</span>                        
                        <span className={style.text}>{props.dialog.text}</span>
                    </div>                    
                </li>                
            </ul>
        </div>
    )
}

export default Dialog;