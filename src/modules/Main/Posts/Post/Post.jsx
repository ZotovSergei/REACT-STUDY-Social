import React from "react";
import style from "./Post.module.css";


const Post = (props) => {
    return (
        <section className={style.post}>
            <h5>
                New Post
            </h5>
            <img className={style.avatar} src="https://www.flaticon.com/premium-icon/icons/svg/2931/2931727.svg" alt=""/>
            <div className={style.message}>
                <span>
                    {`\t` + props.message}
                </span>
            </div>
            <div>
                <span>Like: </span>
                <span>{` ` + props.likes}</span>
            </div>
        </section>
    )
}
export default Post;