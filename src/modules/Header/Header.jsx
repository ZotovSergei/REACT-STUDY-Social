import logo from "../../logo.svg";
import React from "react";
import style from './Header.module.css';

const Header = () => {
    return (<header className={style.header}>
            Header block

            <img className={style.logo} src={logo}/>
        </header>
    )
};

export default Header