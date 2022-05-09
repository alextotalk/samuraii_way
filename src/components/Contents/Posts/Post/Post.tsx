import React from "react";
import m from "./Post.module.css";
import i from "./../../../../images/Ava.jpg"
import {PostType} from "../Posts";

type PostPropsType = {
    post: PostType
}

export function Post(props: PostPropsType) {
    return (
        <div className={m.post}>
            <img src={i} alt=""/>
            <div>{props.post.massager} </div>
            <div>&nbsp;&nbsp;&nbsp;<span>Likes-</span>{props.post.likesCount} </div>
        </div>
    );
}