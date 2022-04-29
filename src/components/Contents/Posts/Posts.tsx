import React from "react";
import m from "./Posts.module.css"
import {Post} from "./Post/Post";
import {Button} from "./Button/Button";
import {TextArea} from "./TextArea/TextArea";
import Water from "../../../images/Water.jpg";

export function Posts() {
    return (
        <div className={m.posts}>
            <div className={m.posts}><img src={Water} alt=""/></div>
            <div>
                <TextArea/>
            </div>
            <div>
                <Button name={"Send"}/>
            </div>
            <Post massager={"Hi!!!"} liksCount={"23"}/>
            <Post massager={"Hi my friend !!!"} liksCount={"2"}/>
        </div>
    );
}