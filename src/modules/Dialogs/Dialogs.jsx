import React from "react";
import style from "./Dialogs.module.css";
import Posts from "../Main/Posts/Posts";
import { NavLink } from "react-router-dom";




const Dialogs = () => {
    const dialogsData = [
        { id: 1, name: 'Host' },
        { id: 2, name: 'Author' },
        { id: 3, name: 'FrakenBok' },
        { id: 4, name: 'SuperMen' },
    ]

    return (
        <section className={style.dialogs}>
            <ul className={style.users}>
                <li className={style.item}><NavLink to={`/dialogs/id${dialogsData[0].id}`}>{`${dialogsData[0].name}`}</NavLink></li>
                <li className={style.item}><NavLink to={`/dialogs/id${dialogsData[1].id}`}>{`${dialogsData[1].name}`}</NavLink></li>
                <li className={style.item}><NavLink to={`/dialogs/id${dialogsData[2].id}`}>{`${dialogsData[2].name}`}</NavLink></li>
                <li className={style.item}><NavLink to={`/dialogs/id${dialogsData[3].id}`}>{`${dialogsData[3].name}`}</NavLink></li>
            </ul>
            {/*<div className={style.dialog}>*/}
            {/*    <Posts />*/}
            {/*</div>*/}
        </section>
    )
}

export default Dialogs;