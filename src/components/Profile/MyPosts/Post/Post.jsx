import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://img.icons8.com/pastel-glyph/2x/wine-glass.png" alt=""/>
                {props.message}
                <div>
                    <span>Like</span>
                    {props.likesCount}
                </div>
            </div>
        </div>)
}
export default Post;
