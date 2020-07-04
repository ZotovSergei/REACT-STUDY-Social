import React from "react";
import style from './Main.module.css';
import Dashboard from "./Dashboard/Dashboard";
import Posts from "./Posts/Posts";

const Main = (props) => {
    return (
        <main className={style.main}>
            <h2>Main block</h2>
            <Dashboard/>
            <Posts postData = {props.state.postData}/>
        </main>
    )
}
export default Main;