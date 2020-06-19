import React from "react";
import style from './Main.module.css';
import Dashboard from "./Dashboard/Dashboard";
import Posts from "./Posts/Posts";

const Main = () => {
    return (
        <main className={style.main}>
            Main block
            <Dashboard/>
            <Posts/>
        </main>
    )
}
export default Main;