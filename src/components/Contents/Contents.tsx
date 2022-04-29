import React from "react";
import img from "../../images/Water.jpg";
import m from "./Contents.module.css"
import {Posts} from "./Posts/Posts";

export function Contents() {
    return (
        <div className={m.Contents}>
            <div className={m.imgBlock}><img src={img} alt=""/></div>
            <Posts/>
        </div>
    );
}