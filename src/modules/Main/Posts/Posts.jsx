import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
    return (
        <section>
            <Post message={`Are you well?`} likes={`4`}/>
            <Post message={`Hello,it is Me`} likes={`66`}/>
            <Post message={`Good morning`} likes={`0`}/>
        </section>
    )
}

export default Posts;