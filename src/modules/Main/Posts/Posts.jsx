import React from "react";
import style from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {    
    const postRender = 
        props.postData.map(el => <Post message={el.message} likes={el.likes}/>)

    return (
        <section>
            {postRender}
        </section>
    )
}

export default Posts;