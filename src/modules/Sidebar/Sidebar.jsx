import React from "react";
import style from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            Sidebar block
            <ul>
                <li><NavLink to={`/main`}>Main</NavLink></li>
                <li><NavLink to={`/news`}>News</NavLink></li>
                <li><NavLink to={`/gallery`}>Gallery</NavLink></li>
                <li><NavLink to={`/dialogs`}>Dialogs</NavLink></li>
            </ul>
        </div>
    )
}
export default Sidebar;
