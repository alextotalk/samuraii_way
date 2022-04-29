import React from "react";
import m from "./Post.module.css";
import i from "./../../../../images/Ava.jpg"

export function Post(props:any) {
    return (
        <div className={m.post}>
            <img src={i} alt=""/>
            <div>{props.massager} </div>
            <div> {props.liksCount} </div>
        </div>
    );
}